import { BadRequestException } from "@nestjs/common";
import { InvalidCredentialsException } from "@/auth/domain/exceptions/invalid-credentials.exception";

export class HttpInvalidCredentialsException extends BadRequestException {
  constructor() {
    super(new InvalidCredentialsException().message);
  }
}
