import { MigrationInterface, QueryRunner } from "typeorm";

export class User1706259971960 implements MigrationInterface {
    name = 'User1706259971960'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "first_name" character varying(50) NOT NULL, "last_name" character varying(50) NOT NULL, "password" character varying(50) NOT NULL, "email" character varying(255) NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
