import { InvalidLoginError } from "./../utils/error";
import type { Knex } from "knex";
import { checkPassword } from "../utils/hash";
import { table } from "../utils/table";
import { User } from "./models";

export class UserService {
  constructor(private knex: Knex) {}

  async checkLogin(username: string, plainPassword: string) {
    const user = await this.knex<User>(table.USER)
      .select("id", "username", "password")
      .where("username", username)
      .first();
      console.log(user)

    if (user && (await checkPassword(plainPassword, user.password))) {
      return user;
    }

    throw new InvalidLoginError();
  }
}