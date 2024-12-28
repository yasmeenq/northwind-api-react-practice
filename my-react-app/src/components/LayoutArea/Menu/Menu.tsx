import { NavLink } from "react-router-dom";
import css from "./Menu.module.css";

export function Menu(): JSX.Element {
    return (
        <div className={css.Menu}>
            <NavLink to={'/home'}>home</NavLink>
            <NavLink to={'/about'}>about</NavLink>
            <NavLink to={'/products'}>data</NavLink>
            <NavLink to={'/new'}>add product</NavLink>
        </div>
    );
}


