import { Module } from '@nestjs/common';
import { ContractModule } from './contract/contract.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './contract/configs/typeorm.config';

@Module({
  imports: [ContractModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
