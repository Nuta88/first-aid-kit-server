import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import typeOrmConfig from '../../ormconfig';

export const AppDataSource = new DataSource(<DataSourceOptions>typeOrmConfig);
