import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Serve static files from the `assets` directory
  app.use('/assets', express.static(join(__dirname, 'assets')));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
