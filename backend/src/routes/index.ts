import { Router } from 'express';
import usersRouter from './userRoutes';

const routes = Router();
routes.use('/users', usersRouter);

routes.get('/', (request, response) => {
return response.json({ message: 'Hello world' });
});

export default routes;