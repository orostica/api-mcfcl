import { EntityRepository, Repository } from 'typeorm';
import Contacts from 'src/entities/Contacts';

@EntityRepository(Contacts)
export class ContactMacRepository extends Repository<Contacts> {
  public async findByName(name: string): Promise<Contacts | undefined> {
    const contact = this.findOne({
      where: {
        nome: name,
      },
    });

    return contact;
  }
}
