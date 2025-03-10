import { Injectable } from "@nestjs/common";
import { Book } from "@/book/domain/entities/book.entity";
import { CreateBookDto } from "@/book/application/dtos/create-book.dto";
import { BookRepositoryContract } from "@/book/domain/contracts/book.repository.contract";
import { IdGeneratorContract } from "@/id-generator/domain/contracts/id-generator.contract";

@Injectable()
export class CreateBookUseCase {
  constructor(
    private readonly idGenerator: IdGeneratorContract,
    private readonly booksRepository: BookRepositoryContract,
  ) {}

  async execute(newBook: CreateBookDto) {
    const book: Book = {
      id: this.idGenerator.generate(),
      ...newBook
    }
    return await this.booksRepository.createBook(book);
  }
}