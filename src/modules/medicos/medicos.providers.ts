import { Medico } from "./entities/medico.entity";

export const medicosProviders = [
    {
      provide: 'MEDICOS_REPOSITORY',
      useValue: Medico,
    },
  ];