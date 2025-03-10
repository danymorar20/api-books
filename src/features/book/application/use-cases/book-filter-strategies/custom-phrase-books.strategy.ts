import { Injectable } from "@nestjs/common";
import { BookDto } from "@/book/application/dtos/book.dto";
import { BookRepositoryContract } from "@/book/domain/contracts/book.repository.contract";
import { BooksNotFoundException } from "@/book/domain/exceptions/books-not-found.exception";
import { BookFilterStrategyContract } from "@/book/domain/contracts/book-filter-strategy.contract";

@Injectable()
export class CustomPhraseBooksStrategy implements BookFilterStrategyContract {
  constructor(private readonly booksRepository: BookRepositoryContract) {}

  async execute(phrase: string): Promise<BookDto[]> {
    const books = await this.booksRepository.getBooksWithCustomPhrase(phrase);
    if (books.length === 0) throw new BooksNotFoundException();
    return books;
  }
}