import css from "./AboutArea.module.css";
import mypic from "../../assets/mypic.webp";
import { useState } from "react";


export function AboutArea(): JSX.Element {

    const [title, setTitle] = useState<string>('Hide');
    const [isVisible, setIsVisible] = useState<boolean>(true);
    
    function toggleVisibility(){
        setIsVisible(!isVisible);
        setTitle(!isVisible? 'Hide': 'Show');
    }
    

    return (
        <div className={css.AboutArea}>
            <p>about</p>
            <div className={css.HidePic}>
                <img className={`${css.pic} ${!isVisible ? css.hidden: ""}`}
                src={mypic} alt="kawaiRabbit" />
                <br></br>
                <button onClick={toggleVisibility}>{title}</button>
            </div>
        </div>
    );
}
