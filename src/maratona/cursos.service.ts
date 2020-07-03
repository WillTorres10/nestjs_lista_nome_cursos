import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './cursos.entity';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private readonly cursosRepository: Repository<Curso>,
  ) {}

  async findAll(): Promise<Curso[]> {
    return await this.cursosRepository.find();
  }

  async create(curso: Curso): Promise<Curso> {
    return await this.cursosRepository.save(curso);
  }
}
