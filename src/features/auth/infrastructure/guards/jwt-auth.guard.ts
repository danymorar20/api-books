import { JwtService } from "@nestjs/jwt";
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { HttpInvalidTokenException } from "../exceptions/http-invalid-token.exception";
import { HttpAuthHeaderRequired } from "@/auth/infrastructure/exceptions/http-auth-header-required.exception";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) throw new HttpAuthHeaderRequired();

    const token = authHeader.split(" ")[1];
    try {
      const decoded = this.jwtService.verify(token);
      request.user = decoded
      return true;
    } catch (error) {
      throw new HttpInvalidTokenException();
    }
  }
}
