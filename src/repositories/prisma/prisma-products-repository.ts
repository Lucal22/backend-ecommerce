import { ProductsRepository, ProductsCreateData } from '../products-repository'
import { prisma } from '../../prisma';



export class PrismaProductsRepository implements  ProductsRepository {
    async create({ name, description, image, price, qtd }: ProductsCreateData){
        await prisma.feedback.create({
            data: {
            name,
            description,
            price,
            qtd,
            image
            }
        })
    };
}