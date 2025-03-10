import { Book } from "@/book/domain/entities/book.entity";

export interface BookFilterStrategyContract {
  execute(param: number | string): Promise<Book[]>;
}