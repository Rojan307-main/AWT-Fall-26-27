import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  fullName!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column()
  age!: number;

  @Column()
  phone!: string;

  @Column()
  accountType!: string;

  @Column({ nullable: true })
  address?: string;
}