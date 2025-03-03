import { Module } from "@nestjs/common";
import { MessageController } from "./infrastructure/http-api/message.controller";
import { HelloWorldUseCase } from "./application/hello-world.use-case";

@Module({
  controllers: [MessageController],
  providers: [HelloWorldUseCase]
})
export class MessageModule {}