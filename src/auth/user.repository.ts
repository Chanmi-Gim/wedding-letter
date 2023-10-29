import { EntityRepository, Repository, DataSource } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, email, password } = authCredentialsDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = this.create({
      username,
      email,
      password: hashedPassword,
      created_at: new Date(),
      deleted_at: new Date(),
      updated_at: new Date(),
    });
    try {
      await this.save(user);
      console.table(user);
    } catch (error) {
      if (error.code === '23505') {
        console.log('error!!!', error);
        throw new ConflictException('이메일이 이미 존재합니다.');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
