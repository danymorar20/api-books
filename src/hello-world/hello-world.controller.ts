import { Controller, Get } from "@nestjs/common";
import { HelloWorldService } from "./hello-world.service";

@Controller("hello")
export class HelloWorldController {
    constructor(private readonly helloWorldService: HelloWorldService) {}

    @Get()
    getHelloWorld() {
        return this.helloWorldService.getHelloWorld();
    }
}
