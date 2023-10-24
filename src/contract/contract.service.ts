import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContractRepository } from './contract.repository';
import { CreateContractDto } from './dto/create-contract.dto';
import { Contract } from './contract.entity';
import { UpdateContractDto } from './dto/update-contract.dto';

@Injectable()
export class ContractService {
  constructor(
    @InjectRepository(ContractRepository)
    private contractRepository: ContractRepository,
  ) {}
  createContract(createContractDto: CreateContractDto): Promise<Contract> {
    return this.contractRepository.createContract(createContractDto);
  }

  async findOneByContractId(id: number): Promise<Contract | null> {
    const contract = await this.contractRepository.findOne({ where: { id } });
    if (!contract) {
      throw new NotFoundException('해당하는 계약서를 찾지 못했어요!');
    }
    return contract;
  }

  async findAll(): Promise<Contract[]> {
    const contract = await this.contractRepository.find({ where: {} });
    if (!contract) {
      throw new BadRequestException('등록된 계약서가 없습니다.');
    }
    return contract;
  }
  async deleteContract(id: number): Promise<void> {
    const result = await this.contractRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`ID가 ${id}인 계약서를 찾지 못했어요!`);
    }
    console.log('result', result);
  }
  updateContractContent(
    id: number,
    updateContractDto: UpdateContractDto,
  ): Promise<Contract> {
    return this.contractRepository.updateContract(id, updateContractDto);
  }
}
