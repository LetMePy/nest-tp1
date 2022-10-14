import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {TodoStatusEnum} from "../models/todostatus.enum";
import {BaseEntity} from "./base.entity";

@Entity("todo")
export class TodoEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({length: 10})
    name: string;
    @Column({length: 10})
    description: string;
    @Column()
    status: TodoStatusEnum;
}