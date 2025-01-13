import axios from "axios";
import { UserModel } from "../Models/UserModel";
import { appConfig } from "../Utils/AppConfig";
import { store } from "../Redux/store";
import { userActions } from "../Redux/slices";
import { CredentialModel } from "../Models/CredentialModel";
import { jwtDecode } from "jwt-decode";

class UserService {

    public constructor(){ //creating a constructor to check token every time
        //fetch token from local storage
        const token = localStorage.getItem("token");
        //if doesn't exist 
        if(!token) return;

        const user = jwtDecode<{user:UserModel}>(token).user; //user

        store.dispatch(userActions.login(user)); //redux client store     
    }

    public async getUser(credentials: CredentialModel):Promise<void>{
        const response = await axios.post<string>(appConfig.loginUrl, credentials); //token
        const token = response.data; //token
        const user = jwtDecode<{user:UserModel}>(token).user; //user
        store.dispatch(userActions.login(user)); //redux client store
        localStorage.setItem("token", token); //set the token in the local storage
    } 

    public async addUser(user:UserModel):Promise<void>{
        const response = await axios.post<string>(appConfig.registerUrl, user);
        const token = await response.data; //this returns a token
        console.log(token); //this returns a token

        const newUser = jwtDecode<{user:UserModel}>(token).user;  //return the user from the token
        console.log(newUser);

        store.dispatch(userActions.register(newUser));

        localStorage.setItem("token", token); //save the token to local storage
        //chrome> inspect> Application> localStorage
    }

    public logoutUser():void{
        //create action object for logout
        const action = userActions.logout();

        //logout from local state
        store.dispatch(action);
        localStorage.removeItem("token");
    }
}

export const userservice = new UserService();
