import { MigrationInterface, QueryRunner } from "typeorm";

export class Medicine1706261984487 implements MigrationInterface {
    name = 'Medicine1706261984487'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "medicine" ("id" BIGSERIAL NOT NULL, "name" character varying(100) NOT NULL, "amount" integer NOT NULL, "expiration_date" date NOT NULL, "description" character varying(300), CONSTRAINT "PK_b9e0e6f37b7cadb5f402390928b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "medicine"`);
    }

}
