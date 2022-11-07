import express from 'express';

const routes = express.Router()

export default routes.get('/login', async (req, res) => {
    res.status(200).json({name: 'lucal'})
})