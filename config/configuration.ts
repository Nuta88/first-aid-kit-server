export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 3001,
  database: process.env.DATABASE || 'nestjs_fak_dev',
  database_port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  database_host: process.env.DATABASE_HOST || 'localhost',
  jwt_secret_key: process.env.JWT_SECRET_KEY || '',
  jwt_refresh_secret_key: process.env.JWT_REFRESH_SECRET_KEY || '',
});
