import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateConnections1619095441645 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "connections",
        columns: [
          {
            name: "id",
            type: "UUID",
            isPrimary: true,
          },
          {
            name: "admin_id",
            type: "UUID",
            isNullable: true,
          },
          {
            name: "user_id",
            type: "UUID",
          },
          {
            name: "socket_id",
            type: "VARCHAR",
          },
          {
            name: "created_at",
            type: "TIMESTAMP",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "TIMESTAMP",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "connections",
      new TableForeignKey({
        name: "FKConnectionUser",
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        columnNames: ["user_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("connections", "FKConnectionUser");
    await queryRunner.dropTable("connections");
  }
}
