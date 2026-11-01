
import { IsNotEmpty, IsOptional, Min} from "class-validator";

export class CreateEmployeeDto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  email: string = "";

  @IsNotEmpty()
  phone: string = "";

  @IsNotEmpty()
  password: string = "";

  @IsNotEmpty()
  age: number = 0;

  @IsNotEmpty()
  yearsOfWorking: number = 0;
}

export class UpdateEmployeeDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  email?: string;

  @IsOptional()
  phone?: string;

  @IsOptional()
  @IsNotEmpty()
  password?: string;

  @IsOptional()
  age?: number;

  @IsOptional()
  @Min(0)
  yearsOfWorking?: number;
}
