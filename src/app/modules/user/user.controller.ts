import { Request, Response } from 'express';
import MainRoutes from '../../../config/mainRoute';
import { adminAuthMiddleware } from '../../middlewares/auth.middleware';
import { I_RequestCustom } from '../../../interfaces/app.interface';
import Services from './user.service'


class UserController extends MainRoutes {
    public routes(): void {
        /** [GET] - Fetch Data */
        this.router.get('/', adminAuthMiddleware, async (req: Request, res: Response) => {
            await Services.fetch(req, res);
        });

        /** [POST] - Create Data */
        this.router.post(
            '/',
            adminAuthMiddleware,
            async (req: I_RequestCustom, res: Response) => {
                await Services.store(req, res);
            }
        );

        /** [GET] - Find By Id  */
        this.router.get('/:unit_id', adminAuthMiddleware, async (req: Request, res: Response) => {
            await Services.fetchById(req, res);
        });

        /** [PUT] - Update Data */
        this.router.put(
            '/:unit_id',
            adminAuthMiddleware,
            async (req: I_RequestCustom, res: Response) => {
                await Services.update(req, res);
            }
        );

        /** [DELETE] - Delete Data */
        this.router.delete('/:unit_id', adminAuthMiddleware, async (req: Request, res: Response) => {
            await Services.softDelete(req, res);
        });
    }
}

export default new UserController().router;
