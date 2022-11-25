import express from 'express';
import postProducts from './controllers/postProducts';
import getProducts from './controllers/getProducts';
import getSomeProducts from './controllers/getSomeProducts';

const routes = express.Router();

routes.get('/getProducts', getProducts);
routes.get('/getSomeProducts?ID=:id', getSomeProducts);
routes.post('/postProducts', postProducts);

export default routes;

