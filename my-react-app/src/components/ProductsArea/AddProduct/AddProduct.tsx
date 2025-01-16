import { useState } from "react";
import css from "./AddProduct.module.css";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import { useNavigate } from "react-router-dom";

export function AddProduct(): JSX.Element {

    const [product, setProduct] = useState<ProductModel>(new ProductModel()); 
    const navigate = useNavigate();

    function ProductChange(event:any){
        if(event.target.name === 'name'){
            product.name = event.target.value; 
        }
        if(event.target.name === 'price'){
            product.price = event.target.value;
        }
        if(event.target.name === 'stock'){
            product.stock = event.target.value;
        }

        const { files } = event.target;  //destructuring
        if(event.target.name === "image" && files.length > 0){
            const file = files[0];  //FileList {0: File, length: 1}
            product.image = file;
        }
        setProduct({...product});           
    }

    async function addProductToDB(){
        console.log(product)
        try{
            await productService.addProduct(product)
            notify.success("product added")
            navigate("/products")
        }
        catch(err:any)
        {
            notify.error(err)
        }
    }
    
    return (
        <div className={css.AddProduct}>

            <form className={css.newForm}>
                <label>Name:</label>
                <input type="string" name="name" value={product?.name} onChange={ProductChange}/>
                <br></br>
                <label>Price:</label>
                <input type="number" step="0.01" name="price" value={product?.price} onChange={ProductChange} />
                <br></br>  
                <label>Stock:</label>
                <input type="number" name="stock" value={product?.stock} onChange={ProductChange} />
                <br></br>
                <label>Image:</label>
                <input type="file" accept="images/*" name="image" onChange={ProductChange} />
            </form>

            <button onClick={addProductToDB}>Add + </button>
        </div>
    );
}
