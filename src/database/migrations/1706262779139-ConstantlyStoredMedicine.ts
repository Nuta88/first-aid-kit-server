import { MigrationInterface, QueryRunner } from "typeorm";

export class ConstantlyStoredMedicine1706262779139 implements MigrationInterface {
    name = 'ConstantlyStoredMedicine1706262779139'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "constantly_stored_medicine" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "priority" character varying(100) NOT NULL, "description" character varying(300), CONSTRAINT "CHK_004488aab30de22bf9c15936eb" CHECK ("priority" = ANY(ARRAY['name', 'category']::varchar[])), CONSTRAINT "PK_71741424f5a6395c6ded4f1ded1" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "constantly_stored_medicine"`);
    }

}
