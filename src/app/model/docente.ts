import { Categoria } from "./categoria"

export class Docente {
  id_docente!: number;
  nombre!: string;
  dni!: string;
  fecha_nacimiento!: Date;
  sueldo!: number;
  email!: string;
  sexo!: string;
  categoria!: Categoria[];
}
