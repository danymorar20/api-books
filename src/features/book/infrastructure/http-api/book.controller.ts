import { BookDto } from "./dtos/books.dto";
import { CreateBookDto } from "./dtos/create-book.dto";
import { HttpExceptionFilter } from "./filters/http-exception.filter";
import { BookFilterContext } from "@/book/application/use-cases/book-filter.context";
import { CreateBookUseCase } from "@/book/application/use-cases/create-book.use-case";
import { GetAllBooksUseCase } from "@/book/application/use-cases/get-all-books.use-case";
import { GetBookByIdUseCase } from "@/book/application/use-cases/get-book-by-id.use-case";
import { GetPriceAverageUseCase } from "@/book/application/use-cases/get-price-average.use-case";
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query, UseFilters, ValidationPipe } from "@nestjs/common";
import { ExpensiveBooksStrategy } from "@/book/application/use-cases/book-filter-strategies/expensive-books.strategy";
import { CustomPhraseBooksStrategy } from "@/book/application/use-cases/book-filter-strategies/custom-phrase-books.strategy";
import { GetBooksQueryDto } from "./dtos/get-books-query.dto";

@UseFilters(HttpExceptionFilter)
@Controller("books")
export class BookController {
  constructor(
    private readonly createBook: CreateBookUseCase,
    private readonly getAllBooks: GetAllBooksUseCase,
    private readonly getBookById: GetBookByIdUseCase,
    private readonly bookFilterContext: BookFilterContext,
    private readonly getPriceAverage: GetPriceAverageUseCase,
    private readonly expensiveBooksStrategy: ExpensiveBooksStrategy,
    private readonly customPhraseBooksStrategy: CustomPhraseBooksStrategy,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createNewBook(@Body() newBook: CreateBookDto): Promise<BookDto> {
    return await this.createBook.execute(newBook);
  }

  @Get("average")
  @HttpCode(HttpStatus.OK)
  async getAverage(): Promise<number> {
    return await this.getPriceAverage.execute();
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getBooks(
    @Query(new ValidationPipe({ transform: true, whitelist: true})) query: GetBooksQueryDto
  ): Promise<BookDto[]> {
    const { price, phrase } = query;
    
    if (price) {
      this.bookFilterContext.setStrategy(this.expensiveBooksStrategy);
      return await this.bookFilterContext.executeFilter(Number(price));
    }

    if (phrase) {
      this.bookFilterContext.setStrategy(this.customPhraseBooksStrategy);
      return await this.bookFilterContext.executeFilter(phrase);
    }

    return await this.getAllBooks.execute();
  }

  @Get(":bookId")
  @HttpCode(HttpStatus.OK)
  async getBooksById(@Param("bookId") bookId: string): Promise<BookDto> {
    return await this.getBookById.execute(bookId);
  }
}