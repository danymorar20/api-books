import { Controller, Get } from "@nestjs/common";
import { HelloWorldUseCase } from "@/message/application/hello-world.use-case";

@Controller("hello")
export class MessageController {
  constructor(private readonly helloWorld: HelloWorldUseCase) {}

  @Get()
  getHelloWorld() {
    return this.helloWorld.execute();
  }
}