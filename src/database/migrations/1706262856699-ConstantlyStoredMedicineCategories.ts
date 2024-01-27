import { MigrationInterface, QueryRunner } from "typeorm";

export class ConstantlyStoredMedicineCategories1706262856699 implements MigrationInterface {
    name = 'ConstantlyStoredMedicineCategories1706262856699'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "constantly_stored_medicine_category" ("constantly_stored_medicine_id" integer NOT NULL, "category_id" integer NOT NULL, CONSTRAINT "PK_01e556567497e4476da2b4eadb8" PRIMARY KEY ("constantly_stored_medicine_id", "category_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_858cc72d5cbbe9c8dd66aeb305" ON "constantly_stored_medicine_category" ("constantly_stored_medicine_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_54b078ced3a92114eb46198de7" ON "constantly_stored_medicine_category" ("category_id") `);
        await queryRunner.query(`ALTER TABLE "constantly_stored_medicine_category" ADD CONSTRAINT "FK_858cc72d5cbbe9c8dd66aeb3056" FOREIGN KEY ("constantly_stored_medicine_id") REFERENCES "constantly_stored_medicine"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "constantly_stored_medicine_category" ADD CONSTRAINT "FK_54b078ced3a92114eb46198de71" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "constantly_stored_medicine_category" DROP CONSTRAINT "FK_54b078ced3a92114eb46198de71"`);
        await queryRunner.query(`ALTER TABLE "constantly_stored_medicine_category" DROP CONSTRAINT "FK_858cc72d5cbbe9c8dd66aeb3056"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_54b078ced3a92114eb46198de7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_858cc72d5cbbe9c8dd66aeb305"`);
        await queryRunner.query(`DROP TABLE "constantly_stored_medicine_category"`);
    }

}
