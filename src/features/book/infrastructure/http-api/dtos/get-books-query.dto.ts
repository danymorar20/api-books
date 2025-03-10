import { IsNumberString, IsOptional, IsString } from "class-validator";

export class GetBooksQueryDto {
  @IsOptional()
  @IsNumberString({}, { message: "Price must be a number"})
  price?: number;

  @IsOptional()
  @IsString()
  phrase: string;
}