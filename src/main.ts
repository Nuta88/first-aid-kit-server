import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerFactory } from "./logger/logger.factory";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: LoggerFactory(),
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.enableCors();
  await app.listen(process.env.APP_PORT);
}
bootstrap();
