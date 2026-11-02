import { IsEmail, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, Matches, Max, Min, MinLength, } from "class-validator";
import { Type } from "class-transformer";

export class CreateUserDto {
  
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: "FullName must be at least 3 characters" })
  fullName!: string;

  @IsEmail({}, { message: "Email must be a valid email address" })
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/, {message:"password must be at least 8 characters and include uppercase, lowercase, number and special character",})
  password!: string;

  @Type(() => Number)
  @IsInt({ message: "Age must be an integer" })
  @Min(18, { message: "Age must not be less than 18" })
  @Max(60, { message: "Age must not be greater than 60" })
  age!: number;

  @IsString()
  @IsNotEmpty()
  @Matches(/^01\d{9}$/, { message: "Phone must be exactly 11 digits and begin with 01",})
  phone!: string;

  @IsIn(["student", "teacher"], {message: "AccountType must be either student or teacher",})
  accountType!: string;

  @IsOptional()
  @IsString()
  @MinLength(10, { message: "Address must be at least 10 characters" })
  address?: string;
}