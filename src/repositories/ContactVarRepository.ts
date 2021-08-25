import { EntityRepository, Repository } from 'typeorm';
import ContactVar from 'src/entities/ContactVar';

@EntityRepository(ContactVar)
export class ContactVarRepository extends Repository<ContactVar> {
  public async findByName(name: string): Promise<ContactVar | undefined> {
    const contact = this.findOne({
      where: {
        nome: name,
      },
    });

    return contact;
  }
}
