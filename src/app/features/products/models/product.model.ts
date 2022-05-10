export interface Product {
    id: number;
    name: string;
    description: string;
    Value : number;
    quantity: number;
    inclusionDate: Date | string;
    Validity: string;
    completed: boolean,
    img: string
};

export interface Client {
    id: number;
    name: string;
    email: string;
    password?: string;
    inclusionDate: Date | string;
    address: string;
    formOfPayment:string;
}