import { useState } from "react";
import css from "./Register.module.css";
import { UserModel } from "../../../Models/UserModel";
import { notify } from "../../../Utils/Notify";
import { userservice } from "../../../Services/UserService";
import { useNavigate } from "react-router-dom";

export function Register(): JSX.Element {

    const [user, setUser] = useState<UserModel>(new UserModel());

    function userChange(event:any){
        console.log(event.target.value);
        if(event.target.name === 'firstName'){
            user.firstName = event.target.value;
        }
        if(event.target.name === 'lastName'){
            user.lastName = event.target.value;
        }
        if(event.target.name === 'email'){
            user.email = event.target.value;
        }
        if(event.target.name === 'password'){
            user.password = event.target.value;
        }
        setUser({...user});
    }
    const nav = useNavigate();
    async function register(){
        try{
            await userservice.addUser(user);
            notify.success('user registered successfully!');
            nav('/home');
        } catch(err:any){
            notify.error(err);
        }
    }

    return (
        <div className={css.Register}>
            <h2>create new user:</h2>
			<form>
                <label>firstName:</label>
                <input type="text" name="firstName" onChange={userChange} />
                <label>lastName:</label>
                <input type="text" name="lastName" onChange={userChange} />
                <label>email:</label>
                <input type="email" name="email" onChange={userChange} />
                <label>password:</label>
                <input type="password" name="password" onChange={userChange} />
            </form>
            <button onClick={register}>register</button>
        </div>
    );
}
