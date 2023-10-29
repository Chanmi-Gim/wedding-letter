import { Module } from '@nestjs/common';
import { ContractModule } from './contract/contract.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './configs/typeorm.config';

@Module({
  imports: [ContractModule, TypeOrmModule.forRoot(typeOrmConfig), AuthModule],
})
export class AppModule {}
