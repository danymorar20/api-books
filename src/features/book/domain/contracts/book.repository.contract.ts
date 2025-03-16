import { Book } from "@/book/domain/entities/book.entity";

export abstract class BookRepositoryContract {
  abstract getAll(): Promise<Book[]>;
  abstract getById(bookId: string): Promise<Book>;
  abstract getExpensiveBooks(price: number): Promise<Book[]>;
  abstract createBook(book: Book): Promise<Book>;
  abstract getBooksWithCustomPhrase(phrase: string): Promise<Book[]>;
  abstract getAveragePrice(): Promise<number>;
}