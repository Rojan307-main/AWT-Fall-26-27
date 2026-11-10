import { IsDateString, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsString()
  customerName: string="";

  @IsNotEmpty()
  @IsString()
  phone: string="";

  @IsNotEmpty()
  @IsString()
  vehicleNumber: string="";

  @IsNotEmpty()
  @IsDateString()
  bookingDate: string="";

  @IsNotEmpty()
  @IsInt()
  serviceId: number=0;
}