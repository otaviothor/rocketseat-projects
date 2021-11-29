import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1619010242014 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "users",
            columns: [
              {
                name: "id",
                type: "UUID",
                isPrimary: true,
              },
              {
                name: "email",
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
