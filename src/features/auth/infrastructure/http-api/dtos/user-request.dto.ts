import { IsNotEmpty, IsString } from "class-validator";

export class UserRequestDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}