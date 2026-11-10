import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { VehicleType } from '../entities/service.entity';

export class CreateServiceDto {
  @IsNotEmpty()
  @IsString()
  name: string="";

  @IsNotEmpty()
  @IsEnum(VehicleType)
  vehicleType?: VehicleType;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  price: number=0;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}