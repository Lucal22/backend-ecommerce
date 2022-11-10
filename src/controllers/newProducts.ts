const newProducts = async (req: any, res: any) => {
    const { name, description, image, price, qtd } = req.body

    res.status(200).json({name: 'products'})
};

export default newProducts;