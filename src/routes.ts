import express from 'express';
import newProducts from './controllers/newProducts';
import products from './controllers/products';

const routes = express.Router();

routes.get('/products', products);
routes.post('/newProduct', newProducts);

routes.get('/login', async (req, res) => {
    res.status(200).json({name: 'lucal log'})
});

export default routes;

