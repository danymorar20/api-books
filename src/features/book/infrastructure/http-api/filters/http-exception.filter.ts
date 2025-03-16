import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { BooksNotFoundException } from "@/book/domain/exceptions/books-not-found.exception";
import { HttpBooksNotFoundException } from "@/book/infrastructure/exceptions/http-books-not-found.exception";

@Catch(BooksNotFoundException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: BooksNotFoundException, host: ArgumentsHost) {
    throw new HttpBooksNotFoundException();
  }
}
