import { ContactMacRepository } from 'src/repositories/ContactMacRepository';
import { ContactVarRepository } from 'src/repositories/ContactVarRepository';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  name: string;
  cellphone: string;
}

type IRequestArray = Array<IRequest>;

function formatCellphone(cellphone: string): string {
  const pais = '+' + cellphone.substring(0, 2) + ' ';
  const estado = '(' + cellphone.substring(2, 4) + ') ';

  return (
    pais +
    estado +
    cellphone.substring(4, 9) +
    '-' +
    cellphone.substring(9, cellphone.length)
  );
}

export class CreateMacapaContacts {
  public async create(data: IRequestArray): Promise<void> {
    const contactRepository = getCustomRepository(ContactMacRepository);

    data.forEach(async element => {
      const contact = contactRepository.create({
        nome: element.name.toUpperCase(),
        celular: formatCellphone(element.cellphone),
      });
      await contactRepository.save(contact);

      return contact;
    });
  }
}

export class CreateVarejaoContacts {
  public async create(data: IRequestArray): Promise<void> {
    const contactRepository = getCustomRepository(ContactVarRepository);

    data.forEach(async element => {
      const contact = contactRepository.create({
        nome: element.name,
        celular: element.cellphone,
      });
      await contactRepository.save(contact);

      return contact;
    });
  }
}
