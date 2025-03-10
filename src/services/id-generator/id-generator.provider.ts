import { Provider } from "@nestjs/common";
import { IdGeneratorContract } from "./domain/contracts/id-generator.contract";
import { UuidV4GeneratorService } from "./infrastructure/uuidv4/uuidv4-generator.service";

export const IdGeneratorProvider: Provider = {
  provide: IdGeneratorContract,
  useClass: UuidV4GeneratorService,
}