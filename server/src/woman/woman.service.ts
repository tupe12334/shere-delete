import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { WomanServiceBase } from "./base/woman.service.base";

@Injectable()
export class WomanService extends WomanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
