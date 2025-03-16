import { BookRepositoryContract } from "@/book/domain/contracts/book.repository.contract";
import { Book } from "@/book/domain/entities/book.entity";
import * as path from 'path';
import { promises as fs } from "fs";

export class BooksJsonRepository implements BookRepositoryContract {
  private books: Book[] = [];

  async getAll(): Promise<Book[]> {
    return await this.loadBooks();
  }

  async getById(bookId: string): Promise<Book> {
    return (await this.loadBooks()).find((book) => book.id === bookId);
  }

  async getExpensiveBooks(price: number): Promise<Book[]> {
    return (await this.loadBooks()).filter((book) => book.price > price);
  }

  async createBook(newBook: Book): Promise<Book> {
    let newBooks = await this.loadBooks();
    newBooks.push(newBook);
    return newBook;
  }

  async getBooksWithCustomPhrase(phrase: string): Promise<Book[]> {
    return (await this.loadBooks()).filter((book) => {
      return phrase.toLowerCase().split("").every((letter) => book.author.toLowerCase().includes(letter));
    });
  }

  async getAveragePrice(): Promise<number> {
    return parseFloat(((await this.loadBooks()).reduce((acc, book) => acc + book.price, 0) / this.books.length).toFixed(2));
  }

  async loadBooks(): Promise<Book[]> {
    if (this.books.length !== 0) return this.books;

    const filePath = path.join(process.cwd(), "dist", "assets", "MOCK_DATA.json");
    const fileContent = await fs.readFile(filePath, "utf-8");
    this.books = JSON.parse(fileContent);
    return this.books;
  }
}
