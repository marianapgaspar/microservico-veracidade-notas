import { Request, Response } from 'express';

class Controller {
    public async verify(req: Request, res: Response) {
        try {
            if (req.query.cnpj && req.query.cnpj == '10490181000569'){
                res.status(200).json({isValid: true});
                return;
            }
            res.status(200).json({isValid: false});
            return;
        } catch (error) {
            res.status(500).send("Error trying to verify: "+ error);
            return;
        }
    }
}
export default Controller;