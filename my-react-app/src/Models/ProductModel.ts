

export class ProductModel {
    id: number;
    name: string;
    price: number;
    stock: number;
    image?: File | null;
    imageUrl?: string;

    constructor() {
        //initial values
        this.id = 0;          
        this.name = '';      
        this.price = 0;       
        this.stock = 0;       
        this.image = null;   
        this.imageUrl = ''; 
    }
}

