import { Product } from "../interface";

export interface ProductsRepository{
    create: (data: Product) => Promise<void>
}

