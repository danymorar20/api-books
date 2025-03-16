import { LoginUseCase } from "@/auth/application/use-cases/login.use-case";
import { Body, Controller, Post, UseFilters } from "@nestjs/common";
import { UserRequestDto } from "./dtos/user-request.dto";
import { HttpInvalidCredentialsFilter } from "./filters/http-invalid-credentials.filter";

@UseFilters(HttpInvalidCredentialsFilter)
@Controller("auth")
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @Post()
  async login(@Body() loginRequest: UserRequestDto): Promise<{ accessToken: string }> {
    return await this.loginUseCase.execute(loginRequest);
  }
}
