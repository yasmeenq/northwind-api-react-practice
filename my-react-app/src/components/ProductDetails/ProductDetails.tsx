import { useNavigate, useParams } from "react-router-dom";
import css from "./ProductDetails.module.css";
import { useEffect, useState } from "react";
import { productService } from "../../Services/ProductService";
import { notify } from "../../Utils/Notify";
import { ProductModel } from "../../Models/ProductModel";
import { ProductCard } from "../ProductCard/ProductCard";
import { NavLink } from "react-router-dom";

export function ProductDetails(): JSX.Element {

    const params = useParams();
    const id = +params.id;

    const [product, setProduct] = useState<ProductModel>();
    const [link, setLink] = useState<string>("");

    const navigate = useNavigate();

    useEffect(()=>{
        productService
        .getOneProduct(id)
        .then((item) => {
            setProduct(item);
            if(item){
                const strID = item?.id?.toString() || "";
                if(strID){
                    setLink("/product/edit/" + strID);                    
                }
            }
        })
        .catch(err => {notify.error(err)})
    }, [id]);

    async function deleteProduct(){
        try{
            const ok = window.confirm("are you sure?"); //boolean
            if(!ok) return
            await productService.deleteProduct(id);
            navigate("/products");
            notify.success("product deleted successfully !!!")
        }
        catch(err:any){
            notify.error(err.message)
        }
    }
    //console.log(product); //{id: 7, name: "Uncle Bob's Organic Dried Pears", price: 30, stock: 15, imageUrl: 'http://localhost:3030/api/products/images/07a71aa7-9b74-4142-af23-f9513efbd4d5.jpg'}
    return (
        <div className={css.ProductDetails}>
			<p>product id = {id}</p>
            {product && <ProductCard product={product}/>}
            <NavLink to={"/products"}>back</NavLink>
            <br></br>
            <NavLink to={link}>edit</NavLink>
            <br></br>
            <NavLink to="#" onClick={deleteProduct}>DELETE</NavLink>
        </div>
    );
}
