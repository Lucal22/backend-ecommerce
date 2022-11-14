import Products from "../interface";

export interface ProductsRepository{
    create: (data: Products) => Promise<void>
}

