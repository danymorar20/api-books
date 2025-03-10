import { Module } from '@nestjs/common';
import { BookModule } from '@/book/book.module';
import { MessageModule } from '@/message/message.module';
import { AuthModule } from './auth/auth.module';
import { IdGeneratorProvider } from '@/id-generator/id-generator.provider';
import { IdGeneratorModule } from '@/id-generator/id-generator.module';

@Module({
  imports: [
    BookModule,
    MessageModule,
    AuthModule,
    IdGeneratorModule
  ],
  providers: [IdGeneratorProvider]
})
export class AppModule {}
