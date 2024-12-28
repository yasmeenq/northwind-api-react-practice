import { useEffect, useState } from "react";
import css from "./HomeArea.module.css";
import mypic from '../../assets/mypic.webp';
import { notify } from "../../Utils/Notify";

export function HomeArea(): JSX.Element {

    const [seconds, setSeconds] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);

    useEffect( ()=>{
        const timer = setInterval( ()=>{
            setSeconds((prevSecond) => {
                if(prevSecond===59){
                    setMinutes((prevMinute)=>{
                        if (prevMinute === 59){
                            setHours((prevHour)=>prevHour+=1)
                            return 0; //reset minutes to 0 
                        }
                        return prevMinute +=1;
                    })  
                    return 0; //reset seconds to 0
                }
                return prevSecond += 1;
            }) 
        }, 1000);

        return () => clearInterval(timer);
    }, [])


    function displayError(){
        notify.error('my bad mate');
    }

    function displaySuccess(){
        notify.success('dap me up')
    }
    
    return (
        <div className={css.HomeArea}>
            <p>
                {String(hours).padStart(2, "0")}:
                {String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
            </p>
            <img src={mypic} alt="kawaiRabbitPic" /> 
            <button onClick={displayError}>display error</button>
            <button onClick={displaySuccess}>display success</button>
        </div>
    );
}
