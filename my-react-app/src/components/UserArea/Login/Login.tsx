import { useState } from "react";
import { CredentialModel } from "../../../Models/CredentialModel";
import { userservice } from "../../../Services/UserService";
import { notify } from "../../../Utils/Notify";
import { useNavigate } from "react-router-dom";
import "./Login.module.css";

export function Login(): JSX.Element {
    const [user, setUser] = useState<CredentialModel>(new CredentialModel());

    function formChange(event:any){
        console.log(event.target.value);
        if(event.target.name === "email"){
            user.email = event.target.value;
        }
        if(event.target.name === "password"){
            user.password = event.target.value;
        }
        setUser({...user});
    }
    const nav = useNavigate();
    async function login(){
        console.log(user);
        try{
            await userservice.getUser(user);
            notify.success('welcome back!');
            nav('/home');
        }
        catch(err: any){
            notify.error(err);
        }
    }

    return (
        <div className="Login">
            <h2>User Login</h2>
			<form>
                <label>email:</label>
                <input type="email" name="email" onChange={formChange}/>
                <label>password:</label>
                <input type="password" name="password"  onChange={formChange}/>
            </form>
            <button onClick={login} >login</button>
        </div>
    );
}
