import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column()
  password!: string;

  @Column({ type: "int" })
  age!: number;

  @Column({ type: "int" })
  yearsOfWorking!: number;
}
