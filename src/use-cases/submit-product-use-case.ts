import { Product } from '../interface';
import { ProductsRepository } from '../repositories/products-repository';

export class SubmitProductUseCase {
    constructor(
      private  ProductsRepository: ProductsRepository, 
    ){}

    async execute(request : Product){
        const { name, description, image, price, qtd, category, type, brand } = request;

        if(!name || !description || !image || !price || !qtd || !category || !type || !brand ){
            throw new Error('All informations are required')
        }
        await this.ProductsRepository.create({
            name,
            brand,
            category,
            type,
            image,
            description,
            price,
            qtd,
        })
    }
}
