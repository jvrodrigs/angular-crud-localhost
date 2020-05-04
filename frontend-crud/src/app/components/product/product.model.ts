export interface Product {
    id?: number; //quando tiver criando não vou precisar do id,
    // mas quando tiver atualizando ou buscando pode ser que precise
    name: string;
    price: number;
}