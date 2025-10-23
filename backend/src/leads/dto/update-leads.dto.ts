import { PartialType } from '@nestjs/mapped-types';
import { CreateLeadDto } from './create-leads.dto';
import { IsEnum, IsOptional, IsString, Length, Matches } from 'class-validator';
import { LeadStatus } from '../lead-status.enum';

export class UpdateLeadDto extends PartialType(CreateLeadDto) {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsString()
  @IsOptional()
  // Aceita CPF apenas com dígitos; ajuste a regra conforme necessidade
  @Matches(/^\d{11}$/, { message: 'cpf deve conter 11 dígitos numéricos' })
  cpf?: string;

  @IsEnum(LeadStatus)
  @IsOptional()
  status?: LeadStatus;

  @IsString()
  @IsOptional()
  @Length(0, 5000)
  comentarios?: string;
}