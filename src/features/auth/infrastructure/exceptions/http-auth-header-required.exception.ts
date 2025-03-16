import { BadRequestException } from "@nestjs/common";
import { AuthHeaderRequired } from "@/auth/domain/exceptions/auth-header-required.exception";

export class HttpAuthHeaderRequired extends BadRequestException {
  constructor() {
    super(new AuthHeaderRequired().message);
  }
}
