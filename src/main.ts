import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Serve static files from the `assets` directory
  app.use('/assets', express.static(join(__dirname, 'assets')));

  // Set validations as available into all app
  app.useGlobalPipes(
    new ValidationPipe(
      // Convert incoming request data to the declared class
      { 
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }
    )
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
