import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({
    message: 'O nome deve ser uma string não vazia',
  })
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({
    message: 'A descrição deve ser uma string não vazia',
  })
  description: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty({
    message: 'A data de validade deve ser uma string não vazia',
  })
  data_validade: Date;
}
