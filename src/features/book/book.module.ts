import { Module } from "@nestjs/common";
import { AuthModule } from "@/auth/auth.module";
import { BookController } from "./infrastructure/http-api/book.controller";
import { BookFilterContext } from "./application/use-cases/book-filter.context";
import { CreateBookUseCase } from "./application/use-cases/create-book.use-case";
import { GetAllBooksUseCase } from "./application/use-cases/get-all-books.use-case";
import { GetBookByIdUseCase } from "./application/use-cases/get-book-by-id.use-case";
import { BookRepositoryContract } from "./domain/contracts/book.repository.contract";
import { BooksJsonRepository } from "./infrastructure/repository/books-json.repository";
import { GetPriceAverageUseCase } from "./application/use-cases/get-price-average.use-case";
import { ExpensiveBooksStrategy } from "./application/use-cases/book-filter-strategies/expensive-books.strategy";
import { CustomPhraseBooksStrategy } from "./application/use-cases/book-filter-strategies/custom-phrase-books.strategy";

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
  imports: [AuthModule],
})
export class BookModule {}
