import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    BooksModule,
    HelloWorldModule,
    AuthModule
  ],
})
export class AppModule {}
