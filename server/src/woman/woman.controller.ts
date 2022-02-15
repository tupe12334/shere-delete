import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WomanService } from "./woman.service";
import { WomanControllerBase } from "./base/woman.controller.base";

@swagger.ApiTags("women")
@common.Controller("women")
export class WomanController extends WomanControllerBase {
  constructor(
    protected readonly service: WomanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
