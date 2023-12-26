import { Permission } from "src/enties/permission.entity"

export class CreateRoleDto {
    id?:number
    name:string

    permissions: Permission[] 
}
