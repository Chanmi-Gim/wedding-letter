import { IsDate, IsNotEmpty, IsString, Length } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contract extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Length(1, 255)
  @IsString()
  @Column()
  wedding_date: string;

  @IsNotEmpty()
  @Length(1, 255)
  @IsString()
  @Column()
  weddingHall_location: string;

  @IsNotEmpty()
  @IsDate()
  @Column()
  created_at: Date;

  @IsNotEmpty()
  @IsDate()
  @Column()
  updated_at: Date;

  @IsNotEmpty()
  @IsDate()
  @Column()
  deleted_at: Date;
}
