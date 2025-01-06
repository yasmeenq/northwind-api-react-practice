

export class WorkerModel{
    id?: number;
    firstName?: string;
    lastName?: string;
    title?: string;
    country?: string;
    city?: string;
    birthDate?: string;
    image?: File | null;
    imageUrl?: string;

    constructor(){
        this.id=0;
        this.firstName='';
        this.lastName ='';
        this.title = '';
        this.country = '';
        this.city = '';
        this.birthDate = '';
        this.image = null;
        this.imageUrl = '';
    }
}