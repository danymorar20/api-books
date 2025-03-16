import { Injectable } from "@nestjs/common";
import { BookDto } from "@/book/application/dtos/book.dto";
import { BookFilterStrategyContract } from "@/book/domain/contracts/book-filter-strategy.contract";

@Injectable()
export class BookFilterContext {
  private strategy: BookFilterStrategyContract;

  setStrategy(strategy: BookFilterStrategyContract) {
    this.strategy = strategy;
  }

  async executeFilter(param: number | string): Promise<BookDto[]> {
    return await this.strategy.execute(param);
  }
}
