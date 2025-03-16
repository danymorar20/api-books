import { JwtServiceContract } from "@/auth/domain/contracts/jwt.service.contract";
import { Injectable } from "@nestjs/common";
import { LoginRequestDto } from "@/auth/application/dtos/login-request.dto";
import { AuthRepositoryContract } from "@/auth/domain/contracts/auth.repository.contract";
import { UserDto } from "@/auth/application/dtos/user.dto";
import { InvalidCredentialsException } from "@/auth/domain/exceptions/invalid-credentials.exception";

@Injectable()
export class LoginUseCase {
  constructor(
    private readonly jwtService: JwtServiceContract,
    private readonly authRepository: AuthRepositoryContract,
  ) {}

  async execute(data: LoginRequestDto): Promise<{ accessToken: string }> {
    const user: UserDto = await this.authRepository.findByUser(data.username);

    if (!user || user.password !== data.password) throw new InvalidCredentialsException();

    const payload = { sub: user.user, email: user.user };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
