import { Roles } from "./roles"

export interface User{
    login: String
    password: String
    role: Roles
}