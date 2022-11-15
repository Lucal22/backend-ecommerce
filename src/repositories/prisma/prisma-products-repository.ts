import { ProductsRepository} from '../products-repository'
import { prisma } from '../../prisma';
import { Product } from '../../interface';

export class PrismaProductsRepository implements  ProductsRepository {
    async create({ name, description, image, price, qtd, category, type, brand }: Product){
        await prisma.product.create({
            data: {
                name,
                brand,
                category,
                type,
                image,
                description,
                price,
                qtd,
            }
        })
    };
}