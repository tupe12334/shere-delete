import { Module } from "@nestjs/common";
import { ManModuleBase } from "./base/man.module.base";
import { ManService } from "./man.service";
import { ManController } from "./man.controller";
import { ManResolver } from "./man.resolver";

@Module({
  imports: [ManModuleBase],
  controllers: [ManController],
  providers: [ManService, ManResolver],
  exports: [ManService],
})
export class ManModule {}
