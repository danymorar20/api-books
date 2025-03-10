import { IsNumber, IsString, Max, Min } from "class-validator";

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsNumber()
  price: number;

  @IsNumber()
  availability: number;

  @IsNumber()
  num_reviews: number;
  
  @IsNumber()
  @Min(0)
  @Max(5)
  stars: number;

  @IsString()
  description: string;
}