import { Module } from "@nestjs/common";
import { AuthModule } from "@/auth/auth.module";
import { HelloWorldUseCase } from "./application/hello-world.use-case";
import { MessageController } from "./infrastructure/http-api/message.controller";

@Module({
  imports: [AuthModule],
  controllers: [MessageController],
  providers: [HelloWorldUseCase]
})
export class MessageModule {}
