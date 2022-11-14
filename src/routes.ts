import express from 'express';
import postProducts from './controllers/postProducts';
import getProducts from './controllers/getProducts';

const routes = express.Router();

routes.get('/getProducts', getProducts);
routes.post('/postProduct', postProducts);

routes.get('/login', async (req, res) => {
    res.status(200).json({name: 'lucal log'})
});

export default routes;

