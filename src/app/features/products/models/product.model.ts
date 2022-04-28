export interface Product {
    id: number;
    name: string;
    description: string;
    password?: string;
    quantity: number;
    inclusionDate: Date | string;
    Validity: string;
    validRegistration: boolean;
    completed: boolean,
    email:string,
    img: string
};

export interface Client {
    name: string;
    email: string;
    password?: string;
    inclusionDate: Date | string;
    address: string;
    formOfPayment:string;
}