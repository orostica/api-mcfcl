import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'database2', name: 'contacts' })
class ContactVar {
  @PrimaryGeneratedColumn('increment')
  id: bigint;

  @Column()
  nome: string;

  @Column()
  celular: string;
}

export default ContactVar;
