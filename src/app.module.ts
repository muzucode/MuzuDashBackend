import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Stock } from './stocks/stock.entity';
import { StocksModule } from './stocks/stocks.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'angular_dashboard_app',
      entities: [User, Stock],
      synchronize: true,
    }),
    StocksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
