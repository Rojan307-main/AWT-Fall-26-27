import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateMotorcareTables1775500022201 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.createTable(
      new Table({
        name: 'services',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'name', type: 'varchar', length: '100', isNullable: false },
          {
            name: 'vehicleType',
            type: 'enum',
            enum: ['car', 'bike'],
            isNullable: false,
          },
          { name: 'description', type: 'text', isNullable: true },
          {
            name: 'price',
            type: 'decimal',
            precision: 10,
            scale: 2,
            isNullable: false,
          },
          { name: 'isActive', type: 'boolean', default: true },
          { name: 'createdAt', type: 'timestamp', default: 'now()' },
        ],
      }),
    );


    await queryRunner.createTable(
      new Table({
        name: 'parts',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'name', type: 'varchar', length: '100', isNullable: false },
          { name: 'brand', type: 'varchar', length: '100', isNullable: false },
          {
            name: 'vehicleType',
            type: 'enum',
            enum: ['car', 'bike'],
            isNullable: false,
          },
          {
            name: 'price',
            type: 'decimal',
            precision: 10,
            scale: 2,
            isNullable: false,
          },
          { name: 'stock', type: 'int', default: 0 },
          { name: 'description', type: 'text', isNullable: true },
          { name: 'createdAt', type: 'timestamp', default: 'now()' },
        ],
      }),
    );


    await queryRunner.createTable(
      new Table({
        name: 'bookings',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'customerName',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          { name: 'phone', type: 'varchar', length: '20', isNullable: false },
          {
            name: 'vehicleNumber',
            type: 'varchar',
            length: '30',
            isNullable: false,
          },
          { name: 'bookingDate', type: 'timestamp', isNullable: false },
          { name: 'serviceId', type: 'int', isNullable: false },
          { name: 'createdAt', type: 'timestamp', default: 'now()' },
        ],
      }),
    );

    // bookings.serviceId -> services.id
    await queryRunner.createForeignKey(
      'bookings',
      new TableForeignKey({
        name: 'FK_bookings_service',
        columnNames: ['serviceId'],
        referencedTableName: 'services',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('bookings', 'FK_bookings_service');
    await queryRunner.dropTable('bookings');
    await queryRunner.dropTable('parts');
    await queryRunner.dropTable('services');
  }
}