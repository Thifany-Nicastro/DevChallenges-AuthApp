import { Router } from 'express';

import UserController from '../controllers/userController';

const userController = new UserController();

const usersRouter = Router();

usersRouter.get('/', userController.index);
usersRouter.post('/', userController.store);
usersRouter.get('/:id', userController.show);
usersRouter.put('/:id', userController.update);
usersRouter.delete('/:id', userController.store);

export default usersRouter;