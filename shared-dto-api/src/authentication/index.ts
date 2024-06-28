/* eslint-disable @typescript-eslint/no-empty-function */
import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

const postAuthUser = (ApiPropertySwagger?: any) => {
  const ApiProperty = ApiPropertySwagger || function () {};

  class AuthCredentials {
    @ApiProperty({ required: true })
    @IsEmail()
    email: string;

    @ApiProperty({ required: true })
    @IsOptional()
    @MinLength(6)
    password?: string; // Marking password as optional using ?
  }

  return AuthCredentials;
}

const AuthCredentials = postAuthUser();
class AuthCredentialsResolver extends AuthCredentials {}

export { AuthCredentialsResolver, postAuthUser };
