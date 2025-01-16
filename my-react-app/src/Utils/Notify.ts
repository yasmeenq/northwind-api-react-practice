import { Notyf } from "notyf";

class Notify {
	private notyf = new Notyf({
        duration: 3000,
        dismissible: true,
        position: {x: "center", y:"top"}
    });

    public success(message:any):void{
        this.notyf.success(message);
    }
    public error(message:any):void{
        message = this.extractErrorMessage(message);
        this.notyf.error(message);
    }

    private extractErrorMessage(err:any):string{
        if(typeof err==="string" && err!=="") return err;
        if(typeof err?.response?.data === "string" && err.response.date !== "") return err.response.data; 
        if(typeof err?.message === "string" && err.message !=="") return err.message;
        return "some error, please try again.";
    }
}

export const notify = new Notify();
