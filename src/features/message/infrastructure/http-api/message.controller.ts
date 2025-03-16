import { Controller, Get, UseGuards } from "@nestjs/common";
import { HelloWorldUseCase } from "@/message/application/hello-world.use-case";
import { JwtAuthGuard } from "@/auth/infrastructure/guards/jwt-auth.guard";

@Controller("hello")
@UseGuards(JwtAuthGuard)
export class MessageController {
  constructor(private readonly helloWorld: HelloWorldUseCase) {}

  @Get()
  getHelloWorld() {
    return this.helloWorld.execute();
  }
}
