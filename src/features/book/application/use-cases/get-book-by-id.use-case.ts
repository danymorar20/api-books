import { BookDto } from "@/book/application/dtos/book.dto";
import { BadRequestException, Injectable } from "@nestjs/common";
import { BookRepositoryContract } from "@/book/domain/contracts/book.repository.contract";

@Injectable()
export class GetBookByIdUseCase {
  constructor(private readonly booksRepository: BookRepositoryContract) {}

  async execute(bookId: string): Promise<BookDto> {
    const book = await this.booksRepository.getById(bookId);
    if (!book) throw new BadRequestException("book not found");
    return book;
  }
}