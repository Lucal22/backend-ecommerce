import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

const getSomeProducts = async (req: any, res: any) => {
    const filterID = parseInt(req.params.id)
     const SomeProducts =  await prisma.product.findMany(
        {
            where: {
                id: filterID
            }
        }
    )
    res.status(200).json(SomeProducts);
};

export default getSomeProducts;