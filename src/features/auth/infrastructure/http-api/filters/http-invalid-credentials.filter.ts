import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { InvalidCredentialsException } from "@/auth/domain/exceptions/invalid-credentials.exception";
import { HttpInvalidCredentialsException } from "@/auth/infrastructure/exceptions/http-invalid-credentials.exception";

@Catch(InvalidCredentialsException)
export class HttpInvalidCredentialsFilter implements ExceptionFilter {
  catch(exception: InvalidCredentialsException, host: ArgumentsHost) {
    throw new HttpInvalidCredentialsException();
  }
}