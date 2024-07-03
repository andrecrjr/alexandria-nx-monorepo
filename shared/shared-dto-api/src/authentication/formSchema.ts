import {IsEmail, IsOptional, MinLength} from "class-validator"
export class AuthCredentialsSchema {
    @IsEmail()
    email: string;

    @IsOptional()
    @MinLength(6)
    password?: string; // Marking password as optional using ?
}