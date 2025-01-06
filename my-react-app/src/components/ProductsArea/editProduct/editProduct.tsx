import { useEffect, useState } from "react";
import { ProductModel } from "../../../Models/ProductModel";
import css from "./editProduct.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";

export function EditProduct(): JSX.Element {
    const [product, setProduct] = useState<ProductModel>();
    const params = useParams();
    const id = +params.id;
    const navigate = useNavigate();

    useEffect(() => {
        productService.getOneProduct(id)
        .then( dbProduct => {
            setProduct(dbProduct)
        })
        .catch(err => notify.error(err.message))
    }, [])

    function productChange(event: any) {
        const { name, value, files } = event.target;
        setProduct(prevProduct => {
            if (name === "name") {
                return { ...prevProduct, name: value };
            }
            if (name === "price") {
                return { ...prevProduct, price: value };
            }
            if (name === "stock") {
                return { ...prevProduct, stock: value };
            }
            if (name === "image" && files.length > 0) {
                return { ...prevProduct, image: files[0] };
            }
            return prevProduct;
        });
    }

    async function editProduct() {
        try {
            product.id = id;
            console.log(product)
            await productService.editProduct(product)
            notify.success("product updated")
            navigate("/products")
        }
        catch (err: any) {
            notify.error(err.message)
        }
    }

    return (
        <div className={css.EditProduct}>
            <h3>EDIT THIS RIGHT NOW!!!</h3>
            <form className={css.newForm}>
                <label>Name:</label>
                <input type="text" name="name" value={product?.name || ''} onChange={productChange} />
                <br></br>
                <label>Price:</label>
                <input type="number" name="price" value={product?.price || 0} step="0.01" onChange={productChange} />
                <br></br>
                <label>Stock:</label>
                <input type="number" name="stock" value={product?.stock || 0} onChange={productChange} />
                <br></br>
                <label>Image</label>
                <input type="file" name="image" accept="image/*" onChange={productChange} />
            </form>
            <button onClick={editProduct}>update</button>
        </div>

    );
}
