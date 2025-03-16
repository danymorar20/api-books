import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { BookModule } from '@/book/book.module';
import { MessageModule } from '@/message/message.module';
import { AuthModule } from '@/auth/auth.module';
import { IdGeneratorProvider } from '@/id-generator/id-generator.provider';
import { IdGeneratorModule } from '@/id-generator/id-generator.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BookModule,
    MessageModule,
    AuthModule,
    IdGeneratorModule
  ],
  providers: [IdGeneratorProvider]
})
export class AppModule {}
