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
import { InputType } from "@nestjs/graphql";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { WomanWhereUniqueInput } from "../../woman/base/WomanWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class ManCreateInput {
  @ValidateNested()
  @Type(() => WomanWhereUniqueInput)
  @IsOptional()
  @ApiProperty({
    required: false,
    type: () => WomanWhereUniqueInput,
  })
  women?: WomanWhereUniqueInput | null;
}
export { ManCreateInput };
