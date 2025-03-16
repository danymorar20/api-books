import { Module } from "@nestjs/common";
import { AuthController } from "./infrastructure/http-api/auth.controller";
import { LoginUseCase } from "./application/use-cases/login.use-case";
import { AuthRepositoryContract } from "./domain/contracts/auth.repository.contract";
import { JwtServiceContract } from "./domain/contracts/jwt.service.contract";
import { AuthInMemoryRepository } from "./infrastructure/repositories/in-memory/auth.in-memory.repository";
import { JwtModule } from "@nestjs/jwt";
import { JwtServiceImpl } from "./infrastructure/services/jwt.service";

@Module({
  imports: [
    JwtModule.register({
      secret: "zapato",
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    LoginUseCase,
    {
      provide: AuthRepositoryContract,
      useClass: AuthInMemoryRepository,
    },
    {
      provide: JwtServiceContract,
      useClass: JwtServiceImpl,
    },
  ],
  exports: [JwtModule],
})
export class AuthModule {}
