import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lead } from './lead.entity';
import { CreateLeadDto } from './dto/create-leads.dto';
import { UpdateLeadDto } from './dto/update-leads.dto';

@Injectable()
export class LeadsService {
  constructor(
    @InjectRepository(Lead)
    private readonly repo: Repository<Lead>,
  ) {}

  create(dto: CreateLeadDto) {
    const lead = this.repo.create(dto);
    return this.repo.save(lead);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const lead = await this.repo.findOne({ where: { id } });
    if (!lead) throw new NotFoundException('Lead não encontrado');
    return lead;
  }

  async update(id: number, dto: UpdateLeadDto) {
    const lead = await this.findOne(id);
    Object.assign(lead, dto);
    return this.repo.save(lead);
  }

  async remove(id: number) {
    const lead = await this.findOne(id);
    await this.repo.remove(lead);
    return { deleted: true };
  }
}
