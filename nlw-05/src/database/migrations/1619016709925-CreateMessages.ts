import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMessages1619016709925 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "messages",
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
            name: "text",
            type: "TEXT",
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
        foreignKeys: [
          {
            name: "FKUser",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("messages");
  }
}
