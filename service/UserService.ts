import type { Knex } from "knex";
import { User } from "./model";
export class UserService {
    //@ts-ignore
    constructor(private knex: Knex) {}

    async checkLogin(username: string, plainPassword: string): Promise<User | null> {
        return null; 
    }
  

}