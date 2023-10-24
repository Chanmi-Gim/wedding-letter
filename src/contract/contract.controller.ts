import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ContractService } from './contract.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { Contract } from './contract.entity';
import { UpdateContractDto } from './dto/update-contract.dto';

@Controller('contract')
export class ContractController {
  constructor(private contractService: ContractService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createContract(
    @Body() createContractDto: CreateContractDto,
  ): Promise<Contract> {
    return this.contractService.createContract(createContractDto);
  }
  @Get()
  findContractAll() {
    const contract = this.contractService.findAll();
    return contract;
  }

  @Get('/:id')
  findContractById(@Param('id') id: number): Promise<Contract | null> {
    return this.contractService.findOneByContractId(id);
  }

  @Delete('/:id')
  deleteContract(@Param('id') id: number): Promise<void> {
    return this.contractService.deleteContract(id);
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  updateContract(
    @Param('id') id: number,
    @Body() updateContractDto: UpdateContractDto,
  ): Promise<Contract> {
    return this.contractService.updateContractContent(id, updateContractDto);
  }
}
