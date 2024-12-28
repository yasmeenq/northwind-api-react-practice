import { ProductModel } from "../../Models/ProductModel";
import css from "./ProductCard.module.css";

type ProductCardProps = {
    product: ProductModel;
}

export function ProductCard(props:ProductCardProps): JSX.Element {
    return (
        <div className={css.ProductCard}>
          <p>Name: {props.product.name}</p>
          <p>Price: {props.product.price}</p>
          <p>Stock: {props.product.stock}</p>
          <img
            src={props.product.imageUrl}
            alt={props.product.name}
            style={{ width: "200px", height: "auto" }}
          />
        </div>
    );
}


