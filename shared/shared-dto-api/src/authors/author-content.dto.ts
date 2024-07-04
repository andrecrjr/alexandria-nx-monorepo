import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional } from "class-validator";
import { AuthorContentDTO } from "./formSchema";
import { CreateUserDTO } from "../user/users.dto";
import { PartialType } from "@nestjs/mapped-types";

export class CreateAuthorContentDTO extends AuthorContentDTO {
  id: number;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  @IsOptional()
  bio?: string;

  @ApiProperty()
  born?: Date;

  @ApiProperty()
  died?: Date;

  @ApiProperty()
  @IsOptional()
  nationality?: string;

  @ApiProperty()
  awards: string[];

  @ApiProperty()
  photoUrl?: string;

  @ApiProperty()
  @IsOptional()
  website?: string;

  @ApiProperty()
  genres: string[];

  @ApiProperty()
  socialMedia?: any;

  @ApiProperty()
  @IsOptional()
  bestSellers: string[];

  @ApiProperty()
  @IsOptional()
  influences: string[];

  @ApiProperty()
  @IsOptional()
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
