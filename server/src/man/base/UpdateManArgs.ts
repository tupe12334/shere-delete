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
import { ArgsType, Field } from "@nestjs/graphql";
import { ManWhereUniqueInput } from "./ManWhereUniqueInput";
import { ManUpdateInput } from "./ManUpdateInput";

@ArgsType()
class UpdateManArgs {
  @Field(() => ManWhereUniqueInput, { nullable: false })
  where!: ManWhereUniqueInput;
  @Field(() => ManUpdateInput, { nullable: false })
  data!: ManUpdateInput;
}

export { UpdateManArgs };