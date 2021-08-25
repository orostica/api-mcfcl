import { Router } from 'express';
import ContactsController from 'src/controllers/ContactsController';

const contactsRouter = Router();
const contactsController = new ContactsController();

contactsRouter.post('/macapa', contactsController.createMacapaContact);
contactsRouter.post('/varejao', contactsController.createVarejaoContact);

export default contactsRouter;
