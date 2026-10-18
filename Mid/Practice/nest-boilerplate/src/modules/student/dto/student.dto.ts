import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateStudentDto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  email: string = "";

  @IsOptional()
  date_of_birth?: Date;

  @IsOptional()
  department?: string;

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}

export class UpdateStudentDto {
  @IsOptional()
  name: string = "";

  @IsOptional()
  email: string = "";

  @IsOptional()
  date_of_birth?: Date;

  @IsOptional()
  department?: string;

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}