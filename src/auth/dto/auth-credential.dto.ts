import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @MinLength(2)
  @MaxLength(20)
  @IsString()
  username: string;

  @MinLength(10)
  @MaxLength(30)
  @IsString()
  email: string;

  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]*$/, { message: '알파벳과 숫자만 입력가능합니다.' })
  @IsString()
  password: string;
}
