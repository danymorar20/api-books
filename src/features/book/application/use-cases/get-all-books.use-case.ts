import { Injectable } from "@nestjs/common";
import { BookDto } from "@/book/application/dtos/book.dto";
import { BookRepositoryContract } from "@/book/domain/contracts/book.repository.contract";

@Injectable()
export class GetAllBooksUseCase {
  constructor(private readonly booksRepository: BookRepositoryContract) {}

  async execute(): Promise<BookDto[]> {
    return await this.booksRepository.getAll();
  }
}