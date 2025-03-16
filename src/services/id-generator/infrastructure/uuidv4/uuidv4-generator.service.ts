import { Injectable } from "@nestjs/common";
import { IdGeneratorContract } from "@/id-generator/domain/contracts/id-generator.contract";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class UuidV4GeneratorService implements IdGeneratorContract {
  generate(): string {
    return uuidv4();
  }
}