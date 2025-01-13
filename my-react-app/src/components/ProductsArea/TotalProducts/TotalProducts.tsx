import { useEffect, useState } from "react";
import css from "./TotalProducts.module.css";
import { AppState, store } from "../../../Redux/store";
import { useSelector } from "react-redux";

export function TotalProducts(): JSX.Element {

    const count = useSelector<AppState, number>( (appState)=> appState.products.length )
    // const [count, setCount] = useState<number>(0);
    // useEffect(()=>{
    //     const unsubscribe = store.subscribe( ()=>{
    //         setCount(store.getState().products.length)
    //     })
    //     return( ()=>{
    //         unsubscribe();
    //     } )
        
    // }, [])
    
    return (
        <div className={css.TotalProducts}>
			count = {count} 🎎
        </div>
    );
}

