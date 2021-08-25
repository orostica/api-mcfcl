import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Contacts {
  @PrimaryGeneratedColumn('increment')
  id: bigint;

  @Column()
  nome: string;

  @Column()
  celular: string;
}

export default Contacts;
