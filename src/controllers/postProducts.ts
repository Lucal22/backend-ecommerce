import { Product } from "../interface";
import { PrismaProductsRepository} from '../repositories/prisma/prisma-products-repository';
import { SubmitProductUseCase } from '../use-cases/submit-product-use-case';

const postProducts = async (req: any, res: any) => {
    const { name, description, image, price, qtd, brand, category, type }: Product = req.body
    if(name && description && image && price && qtd && brand && category && type){
        const prismaProductsRepository = new PrismaProductsRepository();

        const submitProductUseCase = new SubmitProductUseCase(
            prismaProductsRepository
        )

        await submitProductUseCase.execute({
            name,
            brand,
            category,
            type,
            image,
            description,
            price,
            qtd,
        })
        return res.status(201).send(console.log(req.body))
    }else{
        res.status(500).json('Falta informações sobre o produto')
    }
};

export default postProducts;