import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ManService } from "./man.service";
import { ManControllerBase } from "./base/man.controller.base";

@swagger.ApiTags("men")
@common.Controller("men")
export class ManController extends ManControllerBase {
  constructor(
    protected readonly service: ManService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
