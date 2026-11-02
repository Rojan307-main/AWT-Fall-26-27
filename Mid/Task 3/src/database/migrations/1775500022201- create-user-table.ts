import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTable1775500022201 implements MigrationInterface{
  public async up(queryRunner:QueryRunner):Promise<void>

  {
    await queryRunner.createTable(
      new Table({
        name:"users",
        columns:[
          {
            name:"id",
            type:"uuid",
            isPrimary:true,
            generationStrategy:"uuid",
            default:"uuid_generate_v4()",
          },
          {
            name:"full_name",
            type:"varchar",
            isNullable:false,
          },
          {
            name:"email",
            type:"varchar",
            isNullable:false,
          },
          {
            name:"password",
            type:"varchar",
            isNullable:false,
          },
          {
            name:"age",
            type:"int",
            isNullable:false,
          },
          {
            name:"phone",
            type:"varchar",
            isNullable:false,
          },
          {
            name:"account_type",
            type:"varchar",
            isNullable:false,
          },
          {
            name:"address",
            type:"varchar",
            isNullable:true,
          },
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner):Promise<void> {
    await queryRunner.dropTable("users");
  }
  
}