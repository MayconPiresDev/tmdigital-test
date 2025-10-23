import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Lead {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  status: string;

  @Column({ nullable: true, type: 'text' })
  comentarios: string;
}