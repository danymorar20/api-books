import { Response } from "express";
import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { BooksNotFoundException } from "@/book/domain/exceptions/books-not-found.exception";

@Catch(BooksNotFoundException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: BooksNotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(404).json({
      statusCode: 404,
      message: exception.message,
    });
  }
}