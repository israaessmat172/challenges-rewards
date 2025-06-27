import * as dotenv from 'dotenv';
dotenv.config();

export const env = {
  postgres: {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.PG_PORT) || 5432,
    username: process.env.PG_USERNAME || 'postgres',
    password: process.env.PG_PASSWORD || '',
    database: process.env.PG_DATABASE || 'mydb',
  }
};
