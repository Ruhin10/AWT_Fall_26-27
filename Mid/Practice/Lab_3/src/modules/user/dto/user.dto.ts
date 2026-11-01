import {
  IsEmail,
  IsIn,
  IsInt,
  isNotEmpty,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  Max,
  max,
  Min,
  min,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: "Name is mandatory" })
  @MinLength(3, { message: "fullName must be at least 3 characters long" })
  fullname!: string;

  @IsEmail({}, { message: "Please enter a valid email address" })
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, {
    message: "Password must be match with the foramat",
  })
  password!: string;

  @IsInt()
  @IsNotEmpty()
  @Max(60, { message: "Age must be less than 60" })
  @Min(18, { message: "Age must be greater than 18" })
  age!: number;

  @IsNotEmpty()
  @IsString()
  @Matches(/^01\d{9}$/, {
    message: "phone must be exactly 11 digits and begin with 01",
  })
  phone!: string;

  @IsNotEmpty()
  @IsIn(["student", "teacher"], {
    message: 'accountType must be either "student" or "teacher"',
  })
  account_type!: "student" | "teacher";

  @IsOptional()
  @IsString()
  @MinLength(10, {
    message: "address must be at least 10 characters long if provided",
  })
  address?: string;
}
