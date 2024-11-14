import { Controller, Get, NotFoundException, Query, Post, Body, HttpCode, HttpStatus, BadRequestException, Param, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';
import { CreateBookDto } from './dto/create-book.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller("books")
@UseGuards(AuthGuard('jwt'))
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks(
    @Query('price') price?: string,
    @Query('phrase') phrase?: string,
  ): BookDto[] {
    const priceNumber = price ? parseFloat(price) : undefined;

    if (phrase && !/^[a-zA-Z]+$/.test(phrase)) {
      throw new BadRequestException('Phrase should contain only alphabet letters');
    }

    const books = this.booksService.filterBooks({ price: priceNumber, phrase });
    if (!books || books.length === 0) throw new NotFoundException(`No books found with the given filters`);
    return books;
  }

  @Get('/average')
  getAverageFromPrices(): number {
    return this.booksService.getAverage();
  }

  @Get('/:ID')
  findBookByID(@Param('ID') ID: string): BookDto {
    const book = this.booksService.findBookByID(ID);
    if (!book) throw new NotFoundException(`Book with ID ${ID} not found`);
    return book;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createBook(@Body() newBook: CreateBookDto): BookDto {
    if (!newBook.title || !newBook.author) {
      throw new BadRequestException('Invalid book data');
    }
    return this.booksService.createBook(newBook);
  }
}
