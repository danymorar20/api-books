import { User } from "@/auth/domain/entities/user.entity";

export abstract class AuthRepositoryContract {
  abstract findByUser(user: string): Promise<User | null>;
}
