import {ApiProperty} from "@nestjs/swagger"
import {IsEmail, IsOptional, MinLength} from "class-validator"
import { AuthCredentialsSchema } from "./formSchema";

export class AuthCredentials extends AuthCredentialsSchema  {
    @ApiProperty({ required: true })
    email: string;
    
    @ApiProperty({ required: true })
    password?: string; // Marking password as optional using ?
}