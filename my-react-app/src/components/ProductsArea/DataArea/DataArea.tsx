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
    const [searchQuery, setSearchQuery] = useState<string>('');

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

    // const filterdProducts = products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const filteredProducts = products.filter((p) => {
        const normalizedProductName = p.name.toLowerCase().replace(/\s+/g, " ").trim();
        const normalizedSearchQuery = searchQuery.toLowerCase().replace(/\s+/g, " ").trim();
        return normalizedProductName.includes(normalizedSearchQuery);
      });
      
    return (
        <div className={css.DataArea}>
            <div>
                <p>product count: {products.length}</p>
                <input type="text" 
                placeholder="search product... " 
                value={searchQuery}
                onChange={e=> setSearchQuery(e.target.value)}
                className={css.searchInput}
                /> 
            </div>
            <div className={css.productsList}>
                {filteredProducts.map(p => (
                    <NavLink key={p.id} to={"../product/" + p.id}>
                        <ProductCard product={p} />
                    </NavLink>
                ))}
            </div>
        </div>
    );
}
