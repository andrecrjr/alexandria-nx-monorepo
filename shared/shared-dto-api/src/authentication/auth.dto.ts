import {ApiProperty} from "@nestjs/swagger"
import {IsEmail, IsOptional, MinLength} from "class-validator"

export class AuthCredentials  {
    @ApiProperty({ required: true })
    @IsEmail()
    email: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @MinLength(6)
    password?: string; // Marking password as optional using ?
}