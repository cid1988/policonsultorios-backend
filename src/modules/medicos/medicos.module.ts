import { Module } from '@nestjs/common';
import { MedicosService } from './services/medicos.service';
import { MedicosController } from './controllers/medicos.controller';
import { medicosProviders } from './medicos.providers';

@Module({
  controllers: [MedicosController],
  providers: [MedicosService, ...medicosProviders]
})
export class MedicosModule {}
