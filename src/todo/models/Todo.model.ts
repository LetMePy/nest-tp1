import { v4 as uuidv4 } from 'uuid';

export enum TodoStatusEnum {
    'actif' = 'En cours',
    'waiting' = 'En attente',
    'done' = 'Finalisé'
}

export class TodoModel {
    id: string;
    name: string;
    description: string;
    dateCreation: Date;
    status: TodoStatusEnum;

    constructor(
        name: string,
        description: string,
        status?: TodoStatusEnum
    ) {
        this.id = uuidv4().split('-')[0];
        this.name = name;
        this.description = description;
        this.dateCreation = new Date();
        if (status !== undefined) {
            this.status = status;
        } else {
            this.status = TodoStatusEnum.waiting;
        }
    }

    static strToEnum(status: string):  TodoStatusEnum{
        switch (status) {
            case 'actif': return TodoStatusEnum.actif;
            case 'waiting': return TodoStatusEnum.waiting;
            case 'done': return TodoStatusEnum.done;
            default: return TodoStatusEnum.waiting;
        }
    }
}
