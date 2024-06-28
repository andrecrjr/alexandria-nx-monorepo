
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from '../user/users.dto';
import { CreateProfileSchema } from './formSchema';

export class CreateProfileDTO extends CreateProfileSchema {
  id?: number;

  @ApiProperty()
  bio?: string;

  @ApiProperty()
  location?: string;

  @ApiProperty()
  age?: number;

  @ApiProperty()
  gender?: string;

  @ApiProperty()
  interests?: string[];

//   @ApiProperty()
//   @ValidateNested({ each: true })
//   @Type(() => CollectionDTO)
//   @IsOptional()
//   collections?: CollectionDTO[];

  createdAt?: Date;
  updatedAt?: Date;
  userId?: string;
  user?: CreateUserDTO;
}

export class UpdateProfileDTO extends PartialType(CreateProfileDTO) {
  @ApiProperty({ required: false })
  bio?: string;

  @ApiProperty({ required: false })
  location?: string;

  @ApiProperty({ required: false })
  age?: number;

  @ApiProperty({ required: false })
  gender?: string;

  @ApiProperty({ required: false })
  interests?: string[];

}
