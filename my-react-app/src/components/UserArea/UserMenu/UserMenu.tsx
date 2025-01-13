import { NavLink, useNavigate } from "react-router-dom";
import css from "./UserMenu.module.css";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/store";
import { UserModel } from "../../../Models/UserModel";
import { userservice } from "../../../Services/UserService";
import { notify } from "../../../Utils/Notify";

export function UserMenu(): JSX.Element {
    
    const user = useSelector<AppState, UserModel>(store => store.user);
    const nav = useNavigate();
    
    function logout(){
        try{
            userservice.logoutUser();
            notify.success('logged out successfully!');
            nav("/home");
        }catch(err:any){
            notify.error(err);
        }        
    }

    return (
        <div className={css.UserMenu}>
            {
                !user && 
                <div>hello guest |  
                    <NavLink to={"/login"}>login</NavLink>   |    
                    <NavLink to={"/register"}>register</NavLink></div> 
            }
			
            { 
                user && 
                <div>welcome {user.firstName}!    
                <NavLink to={""} onClick={logout}> |  logout</NavLink></div> 
            
            }
        </div>
    );
}
