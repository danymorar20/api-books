import { InvalidTokenException } from "@/auth/domain/exceptions/invalid-token.exception";
import { UnauthorizedException } from "@nestjs/common";

export class HttpInvalidTokenException extends UnauthorizedException {
  constructor() {
    super(new InvalidTokenException().message);
  }
}
