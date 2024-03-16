import { Column, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn, Entity } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    creator?:string

    @Column()
    triggerTime:string

    @Column()
    email:string

    @Column()
    content:string

    @CreateDateColumn()
    createTime:Date

    @UpdateDateColumn()
    updateTime:Date
}
