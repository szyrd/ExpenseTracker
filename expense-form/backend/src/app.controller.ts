import { Controller, Get, Post, Body } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';

@Controller()
export class AppController {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  @Get()
  getRoot(): string {
    return 'Welcome to the Expense Tracker API!';
  }

  @Get('expenses')
  async getAllTransactions(): Promise<Transaction[]> {
    try {
      return await this.transactionRepository.find();
    } catch (error) {
      console.error('Error fetching transactions:', error);
      throw error;
    }
  }

  @Post('expenses')
  async addTransaction(
    @Body() transactionData: Partial<Transaction>,
  ): Promise<string> {
    try {
      const transaction = this.transactionRepository.create(transactionData);
      await this.transactionRepository.save(transaction);
      return 'Transaction saved successfully!';
    } catch (error) {
      console.error('Error saving transaction:', error);
      throw error;
    }
  }
}



