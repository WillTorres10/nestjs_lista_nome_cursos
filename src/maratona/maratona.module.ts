import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoService } from './cursos.service';
import { MaratonaController } from './maratona.controller';
import { Curso } from './cursos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curso])],
  providers: [CursoService],
  controllers: [MaratonaController],
})
export class MaratonaModule {}
