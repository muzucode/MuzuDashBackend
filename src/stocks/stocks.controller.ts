import { Body, Controller, Get, Post } from '@nestjs/common';
import { Stock } from './stock.entity';
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Post()
  async insert(@Body() stock: Stock): Promise<Stock> {
    return await this.stocksService.insert(stock)
  }

  @Get()
  async findAll(): Promise<Stock[]> {
    return await this.stocksService.findAll()
  }
}
