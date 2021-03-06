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
import { ObjectType, Field } from "@nestjs/graphql";
import { IsDate, IsString, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { Man } from "../../man/base/Man";
@ObjectType()
class Woman {
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  @ApiProperty({
    required: true,
  })
  createdAt!: Date;

  @IsString()
  @Field(() => String)
  @ApiProperty({
    required: true,
    type: String,
  })
  id!: string;

  @ValidateNested()
  @Type(() => Man)
  @IsOptional()
  @ApiProperty({
    required: false,
    type: () => Man,
  })
  man?: Man;

  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  @ApiProperty({
    required: true,
  })
  updatedAt!: Date;
}
export { Woman };
