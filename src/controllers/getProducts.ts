const getProducts = async (req: any, res: any) => {
    res.status(200).json({name: 'products'})
};

export default getProducts;