import { Injectable } from "@nestjs/common";
import { BookRepositoryContract } from "@/book/domain/contracts/book.repository.contract";

@Injectable()
export class GetPriceAverageUseCase {
  constructor(private readonly booksRepository: BookRepositoryContract) {}

  async execute() {
    return await this.booksRepository.getAveragePrice();
  }
}