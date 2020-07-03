import { Controller, Get, Post, Body } from '@nestjs/common';
import { CursoService } from './cursos.service';
import { Curso } from './cursos.entity';

@Controller('maratona')
export class MaratonaController {
  constructor(private cusosService: CursoService) {}

  @Get()
  getAll(): Promise<Curso[]> {
    return this.cusosService.findAll();
  }

  @Post('')
  async create(@Body() cursoData: Curso): Promise<Curso> {
    return this.cusosService.create(cursoData);
  }
}
