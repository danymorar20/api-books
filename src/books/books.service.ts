import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { BookDto } from './dto/book.dto';
import { v4 as uuidv4 } from 'uuid';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  private readonly books: BookDto[];

  constructor() {
    const filePath = path.resolve(__dirname, '..', 'assets', 'MOCK_DATA.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    this.books = JSON.parse(fileContent);
  }

  getBooks(): BookDto[] {
    return this.books;
  }

  findBookByID(ID: string): BookDto | undefined {
    return this.books.find((book) => book.id === ID);
  }

  filterBooks({ price, phrase }: { price?: number; phrase?: string }): BookDto[] {
    return this.books.filter((book) => {
      const matchesPrice = price ? book.price > price : true;
      const matchesPhrase = phrase
      ? phrase.toLowerCase().split("").every((letter) => book.author.toLowerCase().includes(letter))
      : true;
      return matchesPrice && matchesPhrase;
    });
  }

  createBook(book: CreateBookDto): BookDto {
    const newBook: BookDto = {
      id: uuidv4(),
      ...book,
    };
    this.books.push(newBook);
    return newBook;
  }

  getAverage(): number {
    const total = this.books.reduce((sum, book) => sum + book.price, 0);
    const average = total / this.books.length;
    return parseFloat(average.toFixed(2));
  }
}
