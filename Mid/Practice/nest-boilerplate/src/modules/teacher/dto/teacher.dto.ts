import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateTeacherDto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  email: string = "";

  @IsNotEmpty()
  salary : number=0;

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
  salary : number=0;

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}