import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MessageModule } from '@/message/message.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    BooksModule,
    MessageModule,
    AuthModule
  ],
})
export class AppModule {}
