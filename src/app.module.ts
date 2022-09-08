import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Medico } from './modules/medicos/entities/medico.entity';
import { MedicosModule } from './modules/medicos/medicos.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      retryAttempts: 100,
      dialect: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'policonsultorios',
      models: [Medico],
      autoLoadModels: true,
      synchronize: false,
      logging: false
    }),
    MedicosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
