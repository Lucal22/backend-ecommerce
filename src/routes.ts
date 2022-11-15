import express from 'express';
import postProducts from './controllers/postProducts';
import getProducts from './controllers/getProducts';

const routes = express.Router();

routes.get('/getProducts', getProducts);
routes.post('/postProduct', postProducts);

export default routes;

