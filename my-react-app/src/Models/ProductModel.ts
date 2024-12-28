

export class ProductModel {
    id: number;
    name: string;
    price: number;
    stock: number;
    image?: File | null;

    constructor() {
        this.id = 0;          
        this.name = '';      
        this.price = 0;       
        this.stock = 0;       
        this.image = null;    
    }
}