import { Module } from "@nestjs/common";
import { CreateBookUseCase } from "./application/use-cases/create-book.use-case";
import { GetAllBooksUseCase } from "./application/use-cases/get-all-books.use-case";
import { GetBookByIdUseCase } from "./application/use-cases/get-book-by-id.use-case";
import { GetPriceAverageUseCase } from "./application/use-cases/get-price-average.use-case";
import { BookFilterContext } from "./application/use-cases/book-filter.context";
import { ExpensiveBooksStrategy } from "./application/use-cases/book-filter-strategies/expensive-books.strategy";
import { CustomPhraseBooksStrategy } from "./application/use-cases/book-filter-strategies/custom-phrase-books.strategy";
import { BookRepositoryContract } from "./domain/contracts/book.repository.contract";
import { BooksJsonRepository } from "./infrastructure/repository/books-json.repository";
import { BookController } from "./infrastructure/http-api/book.controller";

@Module({
  providers: [
    CreateBookUseCase,
    GetAllBooksUseCase,
    GetBookByIdUseCase,
    GetPriceAverageUseCase,
    BookFilterContext,
    ExpensiveBooksStrategy,
    CustomPhraseBooksStrategy,
    {
      provide: BookRepositoryContract,
      useClass: BooksJsonRepository,
    },
  ],
  controllers: [BookController],
})
export class BookModule {}
