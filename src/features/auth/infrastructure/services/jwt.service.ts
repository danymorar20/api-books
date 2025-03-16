import { JwtServiceContract } from "@/auth/domain/contracts/jwt.service.contract";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtServiceImpl implements JwtServiceContract {
  constructor(private readonly jwtService: JwtService) {}

  sign(payload: Record<string, unknown>): string {
    return this.jwtService.sign(payload);
  }

  verify<T extends Record<string, unknown>>(token: string): T {
    return this.jwtService.verify<T>(token);
  }
}
