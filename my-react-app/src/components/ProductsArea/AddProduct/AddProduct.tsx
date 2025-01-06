import { useState } from "react";
import css from "./AddProduct.module.css";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import { useNavigate } from "react-router-dom";

export function AddProduct(): JSX.Element {

    const [product, setProduct] = useState<ProductModel>(new ProductModel()); 
    
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
            console.log(file); //File {name: 'yjtgujy.webp', lastModified: 1733520610577, lastModifiedDate: Fri Dec 06 2024 23:30:10 GMT+0200 (Israel Standard Time), webkitRelativePath: '', size: 10284, …}
            product.image = file;
        }
        setProduct({...product});           
    }

    const navigate = useNavigate();

    function addProductToDB(){
        console.log(product);
        try{
            productService.addProduct(product);
            notify.success('product added successfully!');
            navigate("/products");
        }
        catch(err:any){
            notify.error(err.message);
        }
    }

    // const [name, setName] = useState('');
    // function inputName(event: any) {
    //     const val = event.target.value;
    //     console.log(val);
    //     setName(val);
    //     console.log(`name = ${name}`);
    // }
    // const [price, setPrice] = useState(0);
    // function inputPrice(event:any){
    //     const val = event.target.value;
    //     setPrice(val);
    //     console.log(val);
    // }
    // const [stock, setStock] = useState(0);
    // function inputStock(event:any){
    //     const val = event.target.value;
    //     setStock(val);
    //     console.log(val);
    // }
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

                <button onClick={addProductToDB}>Add + </button>
            </form>
        </div>
    );
}
