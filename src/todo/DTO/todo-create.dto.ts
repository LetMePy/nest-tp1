import {TodoStatusEnum} from "../models/Todo.model";

export class TodoCreate {
    name: string;
    description: string;
    status?: TodoStatusEnum;
}