import { AuthRepositoryContract } from "@/auth/domain/contracts/auth.repository.contract";
import { User } from "@/auth/domain/entities/user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthInMemoryRepository implements AuthRepositoryContract {
  USER: string = "user4";
  PASSWORD: string = "pass4#";

  async findByUser(user: string): Promise<User | null> {
    return user === this.USER ? { user: this.USER, password: this.PASSWORD } : null;
  }
}