import express, { Request, Response } from 'express';
import Controller from '../controller/Controller';

const routes = express.Router();
const controller = new Controller;

routes.get("/", async (req: Request, res: Response) => {
    res.send("Hello world");
})

routes.get('/valida', async (req: Request, res: Response) => {
    await controller.verify(req, res);
});


export default routes;
