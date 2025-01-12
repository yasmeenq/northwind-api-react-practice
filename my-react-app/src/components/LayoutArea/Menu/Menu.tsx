import { NavLink } from "react-router-dom";
import css from "./Menu.module.css";
import { TotalProducts } from "../../ProductsArea/TotalProducts/TotalProducts";

export function Menu(): JSX.Element {
    return (
        <div className={css.Menu}>
            <NavLink to={'/home'}>home</NavLink>
            <NavLink to={'/about'}>about</NavLink>
            <NavLink to={'/products'}>data</NavLink>
            <NavLink to={'/new'}>add product</NavLink>
            <NavLink to={'/workers'}>Workers</NavLink>

            <TotalProducts />
        </div>
    );
}


