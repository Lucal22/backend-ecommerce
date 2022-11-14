import Products from '../interface';
import { ProductsRepository } from '../repositories/products-repository';

export class SubmitProductUseCase {
    constructor(
      private  ProductsRepository: ProductsRepository, 
    ){}

    async execute(request : Products){
        const { name, description, image, price, qtd } = request;

        if(!name || !description || !image || !price || !qtd){
            throw new Error('All informations are required')
        }

        await this.ProductsRepository.create({
            name,
            description,
            price,
            qtd,
            image
        })
    }
}
