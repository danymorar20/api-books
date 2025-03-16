import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { InvalidTokenException } from "@/auth/domain/exceptions/invalid-token.exception";
import { HttpInvalidCredentialsException } from "@/auth/infrastructure/exceptions/http-invalid-credentials.exception";

@Catch()
export class HttpInvalidCredentialsFilter implements ExceptionFilter {
  catch(exception: InvalidTokenException, host: ArgumentsHost) {
    throw new HttpInvalidCredentialsException
  }
}