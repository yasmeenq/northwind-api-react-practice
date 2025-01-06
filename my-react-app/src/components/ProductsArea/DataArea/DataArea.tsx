import css from "./DataArea.module.css";
import { productService } from "../../../Services/ProductService";
import { useEffect, useState } from "react";
import { notify } from "../../../Utils/Notify";
import { ProductModel } from "../../../Models/ProductModel";
import { ProductCard } from "../ProductCard/ProductCard";
import { NavLink } from "react-router-dom";
import { store } from "../../../Redux/store";

export function DataArea(): JSX.Element {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        async function getProducts() {
            try {
                const products = await productService.getAllProducts();
                setProducts(products);
            }
            catch (err: any) {
                notify.error(err);
            }
        }
        getProducts();
    }, [store.getState().products.length])

    return (
        <div className={css.DataArea}>
            <div>
                <p>product count: {products.length}</p>
            </div>
            <div className={css.productsList}>
                {products.map(p => (
                    <NavLink key={p.id} to={"../product/" + p.id}>
                        <ProductCard product={p} />
                    </NavLink>
                ))}
            </div>
        </div>
    );
}
