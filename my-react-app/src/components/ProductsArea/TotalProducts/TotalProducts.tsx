import { useEffect, useState } from "react";
import css from "./TotalProducts.module.css";
import { store } from "../../../Redux/store";

export function TotalProducts(): JSX.Element {

    const [count, setCount] = useState<number>(0);

    useEffect(()=>{
        const unsubscribe = store.subscribe( ()=>{
            setCount(store.getState().products.length)
        })
        return( ()=>{
            unsubscribe();
        } )
        
    }, [store.getState().products.length])
    
    return (
        <div className={css.TotalProducts}>
			count = {count} 🎎
        </div>
    );
}

