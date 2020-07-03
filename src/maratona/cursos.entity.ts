import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  titulo: string;
}
