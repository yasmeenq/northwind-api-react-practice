import { RoutingArea } from "../../RoutingArea/RoutingArea";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Menu } from "../Menu/Menu";
import css from "./Layout.module.css";

export function Layout(): JSX.Element {
    return (
        <div className={css.Layout}>
			<header> <Header /> </header>
            <aside> <Menu/> </aside>
            <main> <RoutingArea /> </main>
            <footer> <Footer /> </footer>
        </div>
    );
}
