import { Module } from "@nestjs/common";
import { WomanModuleBase } from "./base/woman.module.base";
import { WomanService } from "./woman.service";
import { WomanController } from "./woman.controller";
import { WomanResolver } from "./woman.resolver";

@Module({
  imports: [WomanModuleBase],
  controllers: [WomanController],
  providers: [WomanService, WomanResolver],
  exports: [WomanService],
})
export class WomanModule {}
