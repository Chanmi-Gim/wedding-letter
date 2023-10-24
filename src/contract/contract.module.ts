import { Module } from '@nestjs/common';
import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractRepository } from './contract.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ContractRepository])],
  controllers: [ContractController],
  providers: [ContractService, ContractRepository],
})
export class ContractModule {}
