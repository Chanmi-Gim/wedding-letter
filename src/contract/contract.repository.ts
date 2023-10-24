import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Contract } from './contract.entity';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';

@EntityRepository(Contract)
export class ContractRepository extends Repository<Contract> {
  constructor(private readonly dataSource: DataSource) {
    super(Contract, dataSource.createEntityManager());
  }
  async createContract(
    createContractDto: CreateContractDto,
  ): Promise<Contract> {
    const { wedding_date, weddingHall_location } = createContractDto;
    const contract = new Contract();
    contract.wedding_date = wedding_date;
    contract.weddingHall_location = weddingHall_location;
    contract.created_at = new Date();
    contract.deleted_at = new Date();
    contract.updated_at = new Date();
    await contract.save();
    return contract;
  }
  async updateContract(
    id: number,
    updateContractDto: UpdateContractDto,
  ): Promise<Contract> {
    const found = await this.findOne({ where: { id } });
    const { wedding_date, weddingHall_location } = updateContractDto;
    found.wedding_date = wedding_date;
    found.weddingHall_location = weddingHall_location;
    found.updated_at = new Date();
    await found.save();
    return found;
  }
}
