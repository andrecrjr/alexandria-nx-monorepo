import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional } from "class-validator";
import { AuthorContentDTO } from "./formSchema";
import { CreateUserDTO } from "../user/users.dto";
import { PartialType } from "@nestjs/mapped-types";

export class CreateAuthorContentDTO extends AuthorContentDTO {
  
  id?: number;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  bio?: string;

  @ApiProperty()
  born?: Date;

  @ApiProperty()
  died?: Date;

  @ApiProperty()
  nationality?: string;

  @ApiProperty()
  awards: string[];

  @ApiProperty()
  photoUrl?: string;

  @ApiProperty()
  website?: string;

  @ApiProperty()
  genres: string[];

  @ApiProperty()
  socialMedia?: any;

  @ApiProperty()
  bestSellers: string[];

  @ApiProperty()
  influences: string[];

  @ApiProperty()
  influenced: string[];

  @IsOptional()
  @IsInt()
  createdById?: number;

  @IsOptional()
  createdBy?: CreateUserDTO;
}

export class UpdateAuthorContentDto extends PartialType(
  CreateAuthorContentDTO,
) {}
