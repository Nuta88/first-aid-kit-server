import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: `.env.${process.env.NODE_ENV}` });

const config: TypeOrmModuleOptions = {
  type: process.env.TYPEORM_CONNECTION as any,
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT, 10),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [process.env.TYPEORM_ENTITIES],
  autoLoadEntities: true,
  synchronize: false,
  logging: true,
  migrations: [process.env.TYPEORM_MIGRATIONS],
  migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME,
  migrationsRun: false,
  logger: 'advanced-console'
};

export default config;
