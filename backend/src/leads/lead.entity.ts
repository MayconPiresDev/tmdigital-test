import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { LeadStatus } from "./lead-status.enum";

@Entity()
export class Lead {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  cpf: string;

  @Column({ type: 'enum', enum: LeadStatus, default: LeadStatus.NOVO })
  status: string;

  @Column({ nullable: true, type: 'text' })
  comentarios: string;
}