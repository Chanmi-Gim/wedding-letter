import { IsNotEmpty } from 'class-validator';

export class UpdateContractDto {
  @IsNotEmpty()
  wedding_date: string;

  @IsNotEmpty()
  weddingHall_location: string;
}
