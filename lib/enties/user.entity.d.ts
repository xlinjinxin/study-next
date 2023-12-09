import { Role } from './role.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    roles: Role[];
    createAt: Date;
    updateAt: Date;
}
