/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateManArgs } from "./CreateManArgs";
import { UpdateManArgs } from "./UpdateManArgs";
import { DeleteManArgs } from "./DeleteManArgs";
import { ManFindManyArgs } from "./ManFindManyArgs";
import { ManFindUniqueArgs } from "./ManFindUniqueArgs";
import { Man } from "./Man";
import { Woman } from "../../woman/base/Woman";
import { ManService } from "../man.service";

@graphql.Resolver(() => Man)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ManResolverBase {
  constructor(
    protected readonly service: ManService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Man",
    action: "read",
    possession: "any",
  })
  async _menMeta(
    @graphql.Args() args: ManFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Man])
  @nestAccessControl.UseRoles({
    resource: "Man",
    action: "read",
    possession: "any",
  })
  async men(
    @graphql.Args() args: ManFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Man[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Man",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Man, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Man",
    action: "read",
    possession: "own",
  })
  async man(
    @graphql.Args() args: ManFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Man | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Man",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Man)
  @nestAccessControl.UseRoles({
    resource: "Man",
    action: "create",
    possession: "any",
  })
  async createMan(
    @graphql.Args() args: CreateManArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Man> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Man",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Man"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        women: args.data.women
          ? {
              connect: args.data.women,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Man)
  @nestAccessControl.UseRoles({
    resource: "Man",
    action: "update",
    possession: "any",
  })
  async updateMan(
    @graphql.Args() args: UpdateManArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Man | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Man",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Man"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          women: args.data.women
            ? {
                connect: args.data.women,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Man)
  @nestAccessControl.UseRoles({
    resource: "Man",
    action: "delete",
    possession: "any",
  })
  async deleteMan(@graphql.Args() args: DeleteManArgs): Promise<Man | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Woman, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Man",
    action: "read",
    possession: "any",
  })
  async women(
    @graphql.Parent() parent: Man,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Woman | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Woman",
    });
    const result = await this.service.getWomen(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
