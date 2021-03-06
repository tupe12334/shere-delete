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
import { InputType, Field } from "@nestjs/graphql";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { PostCreateNestedManyWithoutTagsInput } from "./PostCreateNestedManyWithoutTagsInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class TagCreateInput {
  @ValidateNested()
  @Type(() => PostCreateNestedManyWithoutTagsInput)
  @IsOptional()
  @Field(() => PostCreateNestedManyWithoutTagsInput, {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => PostCreateNestedManyWithoutTagsInput,
  })
  posts?: PostCreateNestedManyWithoutTagsInput;
}
export { TagCreateInput };
