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
import { ManWhereUniqueInput } from "../../man/base/ManWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class WomanCreateInput {
  @ValidateNested()
  @Type(() => ManWhereUniqueInput)
  @IsOptional()
  @ApiProperty({
    required: false,
    type: () => ManWhereUniqueInput,
  })
  man?: ManWhereUniqueInput;
}
export { WomanCreateInput };
