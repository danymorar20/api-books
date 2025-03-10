import { Injectable } from "@nestjs/common";
import { BookFilterStrategyContract } from "@/book/domain/contracts/book-filter-strategy.contract";
import { BookRepositoryContract } from "@/book/domain/contracts/book.repository.contract";
import { BookDto } from "@/book/application/dtos/book.dto";
import { BooksNotFoundException } from "@/book/domain/exceptions/books-not-found.exception";

@Injectable()
export class ExpensiveBooksStrategy implements BookFilterStrategyContract {
  constructor(private readonly booksRepository: BookRepositoryContract) {}

  async execute(price: number): Promise<BookDto[]> {
    const books = await this.booksRepository.getExpensiveBooks(price);
    if (books.length === 0) throw new BooksNotFoundException();
    return books;
  }
}