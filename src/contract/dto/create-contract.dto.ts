import { IsNotEmpty } from 'class-validator';
export class CreateContractDto {
  @IsNotEmpty()
  wedding_date: string;

  @IsNotEmpty()
  weddingHall_location: string;
}
