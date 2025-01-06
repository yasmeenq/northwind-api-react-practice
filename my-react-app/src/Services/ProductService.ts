import axios from "axios";
import { ProductModel } from "../Models/ProductModel";
import { appConfig } from "../Utils/AppConfig";
import { store } from "../Redux/store";
import { productActions } from "../Redux/slices";

class ProductService {
    public async getAllProducts():Promise<ProductModel[]>{
        //if it's already in the store return 
        if(store.getState().products.length > 0){
            return store.getState().products;
        }

        //if not: fetch them from api 
        const response = await axios.get(appConfig.productsUrl); //{data: Array(78), status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
        const products = await response.data;

        //then send them to the store
        store.dispatch(productActions.init(products)); 
        return products
    }

    public async getOneProduct(id:number):Promise<ProductModel>{
        const desiredProduct = store.getState().products.find(p => p.id == id);
        if(desiredProduct) return desiredProduct;

        const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
        const product = await response.data;

        return product
    }

    public async addProduct(product:ProductModel):Promise<void>{
        //add to server
        const options = {headers : { "Content-Type":"multipart/form-data"}}; //for images
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product, options);
        const newProduct = await response.data;
        //add to client redux store
        store.dispatch(productActions.add(newProduct));
    }

    public async editProduct(product:ProductModel):Promise<void>{
        //add updated item to server
        const options = {headers : { "Content-Type":"multipart/form-data"}}; //for images
        const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, options);
        const updatedProduct = await response.data;
        //add updated item to client redux store
        store.dispatch(productActions.update(updatedProduct));
    }

    public async deleteProduct(id:number):Promise<void>{
        //remove from server
        const response = await axios.delete(appConfig.productsUrl + id);
        //remove from client redux store
        store.dispatch(productActions.remove(id));
    }
} 

export const productService = new ProductService();
