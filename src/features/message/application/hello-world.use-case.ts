import { Injectable } from "@nestjs/common";
import { Message } from "@/message/domain/message.entity";

@Injectable()
export class HelloWorldUseCase {
  message: Message = { text: "Hello, World!" };

  execute(): string {
    return this.message.text;
  }
}