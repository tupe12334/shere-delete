import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ManServiceBase } from "./base/man.service.base";

@Injectable()
export class ManService extends ManServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
