import { Module } from "@nestjs/common";
import { UuidV4GeneratorService } from "./uuidv4-generator.service";
import { IdGeneratorContract } from "@/id-generator/domain/contracts/id-generator.contract";

@Module({
  providers: [UuidV4GeneratorService],
  exports: [IdGeneratorContract],
})
export class UuidV4GeneratorModule {}