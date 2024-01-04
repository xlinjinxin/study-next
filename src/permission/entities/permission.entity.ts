import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  
} from 'typeorm';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({
    length: 50,
  })
  @ApiProperty()
  name: string;

  @Column({
    length: 100,
    nullable: true,
  })
  @ApiProperty()
  desc: string;

  @CreateDateColumn()
  @ApiProperty()
  createTime: Date;

  @UpdateDateColumn()
  @ApiProperty()
  updateTime: Date;
}
