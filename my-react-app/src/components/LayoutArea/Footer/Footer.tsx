import css from "./Footer.module.css";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export function Footer(): JSX.Element {
    const location = useLocation();
    const workerCount = useSelector((state: any) => state.workers.length);

    return (
        <div className={css.Footer}>
            <p>copyright c </p>
            {location.pathname === '/workers' && <p>workers: {workerCount}</p>}
        </div>
    );
}
