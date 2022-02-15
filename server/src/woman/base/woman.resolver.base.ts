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
import { CreateWomanArgs } from "./CreateWomanArgs";
import { UpdateWomanArgs } from "./UpdateWomanArgs";
import { DeleteWomanArgs } from "./DeleteWomanArgs";
import { WomanFindManyArgs } from "./WomanFindManyArgs";
import { WomanFindUniqueArgs } from "./WomanFindUniqueArgs";
import { Woman } from "./Woman";
import { Man } from "../../man/base/Man";
import { WomanService } from "../woman.service";

@graphql.Resolver(() => Woman)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class WomanResolverBase {
  constructor(
    protected readonly service: WomanService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Woman",
    action: "read",
    possession: "any",
  })
  async _womenMeta(
    @graphql.Args() args: WomanFindManyArgs
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

  @graphql.Query(() => [Woman])
  @nestAccessControl.UseRoles({
    resource: "Woman",
    action: "read",
    possession: "any",
  })
  async women(
    @graphql.Args() args: WomanFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Woman[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Woman",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Woman, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Woman",
    action: "read",
    possession: "own",
  })
  async woman(
    @graphql.Args() args: WomanFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Woman | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Woman",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Woman)
  @nestAccessControl.UseRoles({
    resource: "Woman",
    action: "create",
    possession: "any",
  })
  async createWoman(
    @graphql.Args() args: CreateWomanArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Woman> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Woman",
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
        `providing the properties: ${properties} on ${"Woman"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        man: args.data.man
          ? {
              connect: args.data.man,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Woman)
  @nestAccessControl.UseRoles({
    resource: "Woman",
    action: "update",
    possession: "any",
  })
  async updateWoman(
    @graphql.Args() args: UpdateWomanArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Woman | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Woman",
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
        `providing the properties: ${properties} on ${"Woman"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          man: args.data.man
            ? {
                connect: args.data.man,
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

  @graphql.Mutation(() => Woman)
  @nestAccessControl.UseRoles({
    resource: "Woman",
    action: "delete",
    possession: "any",
  })
  async deleteWoman(
    @graphql.Args() args: DeleteWomanArgs
  ): Promise<Woman | null> {
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

  @graphql.ResolveField(() => Man, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Woman",
    action: "read",
    possession: "any",
  })
  async man(
    @graphql.Parent() parent: Woman,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Man | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Man",
    });
    const result = await this.service.getMan(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
