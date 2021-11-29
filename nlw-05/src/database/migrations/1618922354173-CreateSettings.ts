import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1618922354173 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "settings",
                columns: [
                    {
                        name: "id",
                        type: "UUID",
                        isPrimary: true
                    },
                    {
                        name: "username",
                        type: "VARCHAR"
                    },
                    {
                        name: "chat",
                        type: "BOOLEAN",
                        default: true
                    },
                    {
                        name: "created_at",
                        type: "TIMESTAMP",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "TIMESTAMP",
                        default: "now()"
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings");
    }

}
