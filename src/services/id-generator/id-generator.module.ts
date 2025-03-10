import { Global, Module } from "@nestjs/common";
import { UuidV4GeneratorModule } from "./infrastructure/uuidv4/uuidv4-generator.module";
import { IdGeneratorProvider } from "./id-generator.provider";

@Global()
@Module({
  providers: [UuidV4GeneratorModule, IdGeneratorProvider],
  exports: [IdGeneratorProvider],
})
export class IdGeneratorModule {}