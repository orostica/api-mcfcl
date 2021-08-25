import { Router } from 'express';
import contactsRouter from 'src/routes/contacts.routes';

const routes = Router();

routes.use('/add', contactsRouter);

export default routes;
