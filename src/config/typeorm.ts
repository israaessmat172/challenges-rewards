import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserAuth } from "../models/user-auth.models";
import { Challenge } from "../models/challenges.models";
import { Submission } from "../models/submissions.models";
import { Reward } from "../models/rewards.models";
import { PointsHistory } from "../models/points-history.models";
import * as dotenv from "dotenv";
import { env } from "./env";

dotenv.config();

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT || "5432"),
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  synchronize: true,
  logging: false,
  entities: [UserAuth, Challenge, Submission, Reward, PointsHistory],
  migrations: ["src/migrations/*.ts"],
});

export const initializeDB = async () => {
  try {
    await dataSource.initialize();
    console.log("Data Source has been initialized!");
  } catch (err) {
    console.error("Error during Data Source initialization:", err);
  }
};
