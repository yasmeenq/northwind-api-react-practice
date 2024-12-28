import { Route, Routes } from "react-router-dom";
import { HomeArea } from "../HomeArea/HomeArea";
import { AboutArea } from "../AboutArea/AboutArea";
import { DataArea } from "../DataArea/DataArea";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import { AddProduct } from "../AddProduct/AddProduct";
import { EditProduct } from "../editProduct/editProduct";

export function RoutingArea(): JSX.Element {
    return (
        <>
			<Routes>
                <Route path="/" element={ <HomeArea/> } />
                <Route path="/home" element={ <HomeArea/> } />
                <Route path="/about" element={ <AboutArea /> } />
                <Route path="/products" element={ <DataArea/> } />
                <Route path="/product/:id" element={ <ProductDetails/> } />
                <Route path="/product/edit/:id" element={ <EditProduct/> } />
                <Route path="/new" element={<AddProduct />}/>
                <Route path="/*" element={ <PageNotFound /> } />
            </Routes>
        </>
    );
}

