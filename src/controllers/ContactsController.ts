import { Request, Response } from 'express';
import {
  CreateMacapaContacts,
  CreateVarejaoContacts,
} from 'src/services/CreateContacts';

export default class ContactsController {
  public async createMacapaContact(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { contacts } = request.body;

    const createContact = new CreateMacapaContacts();

    try {
      await createContact.create(contacts);
      return response
        .json({ message: 'Dados Inseridos com sucesso!' })
        .status(200);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  public async createVarejaoContact(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { contacts } = request.body;

    const createContact = new CreateVarejaoContacts();

    try {
      await createContact.create(contacts);
      return response
        .json({ message: 'Dados Inseridos com sucesso!' })
        .status(200);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}
