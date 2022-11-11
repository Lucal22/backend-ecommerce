export interface ProductsCreateData{
    name: string;
    description: string;
    image: string;
    price: string;
    qtd: number;
}

export interface ProductsRepository{
    create: (data: ProductsCreateData) => Promise<void>;
}

