import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Service } from '../../services/entities/service.entity';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  customerName!: string;

  @Column({ length: 20 })
  phone!: string;

  @Column({ length: 30 })
  vehicleNumber!: string;

  @Column({ type: 'timestamp' })
  bookingDate!: Date;

  @Column()
  serviceId!: number;

  @ManyToOne(() => Service, (service) => service.bookings, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'serviceId' })
  service!: Service;

  @CreateDateColumn()
  createdAt!: Date;
}