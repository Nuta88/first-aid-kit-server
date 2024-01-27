import { MigrationInterface, QueryRunner } from "typeorm";

export class MedicineCategories1706262513601 implements MigrationInterface {
    name = 'MedicineCategories1706262513601'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "medicine_category" ("medicine_id" bigint NOT NULL, "category_id" integer NOT NULL, CONSTRAINT "PK_f9845e38338166d85b37451c40d" PRIMARY KEY ("medicine_id", "category_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4e1ee4327503ce7300a29efe96" ON "medicine_category" ("medicine_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_4dab23a0d0c0f72bd2c6891be8" ON "medicine_category" ("category_id") `);
        await queryRunner.query(`ALTER TABLE "medicine_category" ADD CONSTRAINT "FK_4e1ee4327503ce7300a29efe96d" FOREIGN KEY ("medicine_id") REFERENCES "medicine"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "medicine_category" ADD CONSTRAINT "FK_4dab23a0d0c0f72bd2c6891be85" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "medicine_category" DROP CONSTRAINT "FK_4dab23a0d0c0f72bd2c6891be85"`);
        await queryRunner.query(`ALTER TABLE "medicine_category" DROP CONSTRAINT "FK_4e1ee4327503ce7300a29efe96d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4dab23a0d0c0f72bd2c6891be8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4e1ee4327503ce7300a29efe96"`);
        await queryRunner.query(`DROP TABLE "medicine_category"`);
    }

}
