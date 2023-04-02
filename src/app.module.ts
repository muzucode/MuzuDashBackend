import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Stock } from './stocks/stock.entity';
import { StocksModule } from './stocks/stocks.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'batman',
      password: 'Weaver34',
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
