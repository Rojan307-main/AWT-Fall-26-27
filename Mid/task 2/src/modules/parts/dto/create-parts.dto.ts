import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { VehicleType } from '../../services/entities/service.entity';

export class CreatePartDto {
  @IsNotEmpty()
  @IsString()
  name: string="";

  @IsNotEmpty()
  @IsString()
  brand: string="";

  @IsNotEmpty()
  @IsEnum(VehicleType)
  vehicleType?: VehicleType;

  @IsNotEmpty()
  @IsNumber()
  price: number=0;

  @IsNotEmpty()
  @IsInt()
  stock: number=0;

  @IsOptional()
  @IsString()
  description?: string;
}