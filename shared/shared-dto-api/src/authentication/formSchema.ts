import {IsEmail, IsOptional, MinLength} from "class-validator"
export abstract class AuthCredentialsSchema {
    @IsEmail()
    email: string;

    @IsOptional()
    @MinLength(6)
    password?: string; // Marking password as optional using ?
}