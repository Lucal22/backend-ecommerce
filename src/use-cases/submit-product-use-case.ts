import { ProductsRepository } from '../repositories/products-repository';

interface SubmitProductUseCaseRequest {
    name: string;
    description: string;
    image: string;
    price: string;
    qtd: number;
}

export class SubmitProductUseCase {
    constructor(
      private  ProductsRepository: ProductsRepository, 
    ){}

    async execute(request :SubmitProductUseCaseRequest){
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
