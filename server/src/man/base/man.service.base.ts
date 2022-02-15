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
import { PrismaService } from "nestjs-prisma";
import { Prisma, Man, Woman } from "@prisma/client";

export class ManServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ManFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManFindManyArgs>
  ): Promise<number> {
    return this.prisma.man.count(args);
  }

  async findMany<T extends Prisma.ManFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManFindManyArgs>
  ): Promise<Man[]> {
    return this.prisma.man.findMany(args);
  }
  async findOne<T extends Prisma.ManFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManFindUniqueArgs>
  ): Promise<Man | null> {
    return this.prisma.man.findUnique(args);
  }
  async create<T extends Prisma.ManCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManCreateArgs>
  ): Promise<Man> {
    return this.prisma.man.create<T>(args);
  }
  async update<T extends Prisma.ManUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManUpdateArgs>
  ): Promise<Man> {
    return this.prisma.man.update<T>(args);
  }
  async delete<T extends Prisma.ManDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManDeleteArgs>
  ): Promise<Man> {
    return this.prisma.man.delete(args);
  }

  async getWomen(parentId: string): Promise<Woman | null> {
    return this.prisma.man
      .findUnique({
        where: { id: parentId },
      })
      .women();
  }
}
