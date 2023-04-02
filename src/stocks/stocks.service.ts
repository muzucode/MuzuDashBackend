import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stock } from './stock.entity';

@Injectable()
export class StocksService {
  constructor(
    @InjectRepository(Stock)
    private stocksRepository: Repository<Stock>,
  ) {}
  

  findAll(): Promise<Stock[]> {
    return this.stocksRepository.find();
  }

  findOne(ticker: string): Promise<Stock | null> {
    return this.stocksRepository.findOneBy({ ticker });
  }

  async remove(id: number): Promise<void> {
    await this.stocksRepository.delete(id);
  }

  async insert(stock: Stock): Promise<Stock> {
    console.log(stock)
    return await this.stocksRepository.save(stock);
  }
}