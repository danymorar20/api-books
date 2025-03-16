import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { LoginUseCase } from "./application/use-cases/login.use-case";
import { JwtServiceImpl } from "./infrastructure/services/jwt.service";
import { AuthController } from "./infrastructure/http-api/auth.controller";
import { JwtServiceContract } from "./domain/contracts/jwt.service.contract";
import { AuthRepositoryContract } from "./domain/contracts/auth.repository.contract";
import { AuthInMemoryRepository } from "./infrastructure/repositories/in-memory/auth.in-memory.repository";

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>("JWT_SECRET"),
        signOptions: { expiresIn: configService.get<string>("JWT_EXPIRES_IN") },
      }),
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
