import { Request, Response } from 'express';

class Controller {
    public async verify(req: Request, res: Response) {
        try {
            res.status(200).send("OK");
            return;
        } catch (error) {
            res.status(500).send("Error trying to verify: "+ error);
            return;
        }
    }
}
export default Controller;