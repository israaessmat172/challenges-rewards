import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1750982272405 implements MigrationInterface {
    name = 'InitialMigration1750982272405'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."submission_status_enum" AS ENUM('pending', 'approved', 'rejected')`);
        await queryRunner.query(`CREATE TABLE "submission" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "proof" character varying NOT NULL, "status" "public"."submission_status_enum" NOT NULL DEFAULT 'pending', "submitted_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "challengeId" uuid, CONSTRAINT "PK_7faa571d0e4a7076e85890c9bd0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "challenge" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" text NOT NULL, "points" integer NOT NULL, "type" character varying NOT NULL, "deadline" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "createdById" uuid, CONSTRAINT "PK_5f31455ad09ea6a836a06871b7a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "points_history" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "points" integer NOT NULL, "reason" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_9c1159eab3bdfcc3e11f647e8f7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_auth_role_enum" AS ENUM('user', 'admin')`);
        await queryRunner.query(`CREATE TABLE "user_auth" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."user_auth_role_enum" NOT NULL DEFAULT 'user', "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_caf2937301e1200d142227a9be2" UNIQUE ("email"), CONSTRAINT "PK_56d00ec31dc3eed1c3f6bff4f58" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reward" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "points_cost" integer NOT NULL, CONSTRAINT "PK_a90ea606c229e380fb341838036" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "submission" ADD CONSTRAINT "FK_7bd626272858ef6464aa2579094" FOREIGN KEY ("userId") REFERENCES "user_auth"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "submission" ADD CONSTRAINT "FK_d3af0954e5f8c6c9ee89e9dd989" FOREIGN KEY ("challengeId") REFERENCES "challenge"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "challenge" ADD CONSTRAINT "FK_dd344cff4bfd65dbf48d1d008ba" FOREIGN KEY ("createdById") REFERENCES "user_auth"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "points_history" ADD CONSTRAINT "FK_28295a2755992f9e8aeca46c8b7" FOREIGN KEY ("userId") REFERENCES "user_auth"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "points_history" DROP CONSTRAINT "FK_28295a2755992f9e8aeca46c8b7"`);
        await queryRunner.query(`ALTER TABLE "challenge" DROP CONSTRAINT "FK_dd344cff4bfd65dbf48d1d008ba"`);
        await queryRunner.query(`ALTER TABLE "submission" DROP CONSTRAINT "FK_d3af0954e5f8c6c9ee89e9dd989"`);
        await queryRunner.query(`ALTER TABLE "submission" DROP CONSTRAINT "FK_7bd626272858ef6464aa2579094"`);
        await queryRunner.query(`DROP TABLE "reward"`);
        await queryRunner.query(`DROP TABLE "user_auth"`);
        await queryRunner.query(`DROP TYPE "public"."user_auth_role_enum"`);
        await queryRunner.query(`DROP TABLE "points_history"`);
        await queryRunner.query(`DROP TABLE "challenge"`);
        await queryRunner.query(`DROP TABLE "submission"`);
        await queryRunner.query(`DROP TYPE "public"."submission_status_enum"`);
    }

}
