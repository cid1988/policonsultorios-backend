import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
      models: [],
      autoLoadModels: true,
      synchronize: false,
      logging: false
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
