import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transaction } from './transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // Use the username you used to log in
      password: 'yerdana2001', // Replace with your actual PostgreSQL password
      database: 'expenses', // Name of the database you created
      entities: [Transaction],
      synchronize: true, // Automatically syncs schema (set to false in production)
    }),
    TypeOrmModule.forFeature([Transaction]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

