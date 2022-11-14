
const postProducts = async (req: any, res: any) => {
    const { name, description, image, price, qtd } = req.body
    if(name && description && image && price && qtd){
        res.status(200).json('Produto adicionado')
    }else{
        res.status(500).json('Falta informações sobre o produto')
    }
};

export default postProducts;