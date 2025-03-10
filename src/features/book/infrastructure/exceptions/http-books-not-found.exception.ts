import { NotFoundException } from "@nestjs/common";
import { BooksNotFoundException } from "@/book/domain/exceptions/books-not-found.exception";

export class HttpBooksNotFoundException extends NotFoundException {
  constructor() {
    super(new BooksNotFoundException().message)
  }
}