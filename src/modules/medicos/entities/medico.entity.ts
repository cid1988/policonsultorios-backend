import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table({timestamps: false, underscored: true})
export class Medico extends Model {
  @PrimaryKey
  @Column
  medico_id: number;

  @Column
  nombre: string;

  @Column
  apellido: string;
}