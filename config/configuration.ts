export const configuration = () => ({
  node_env: process.env.NODE_ENV,
  app_port: parseInt(process.env.APP_PORT, 10) || 3001,
  database_name: process.env.DATABASE_NAME || 'nestjs_fak_dev',
  database_port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  database_host: process.env.DATABASE_HOST || 'localhost',
  database_username: process.env.DATABASE_USERNAME || 'root',
  database_password: process.env.DATABASE_PASSWORD || '',
  jwt_secret_key: process.env.JWT_SECRET_KEY || '',
  jwt_refresh_secret_key: process.env.JWT_REFRESH_SECRET_KEY || '',
});
