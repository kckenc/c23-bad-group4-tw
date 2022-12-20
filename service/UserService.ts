// import { InvalidLoginError } from "./../utils/error";
import type { Knex } from "knex";
// import { checkPassword } from "../utils/hash";
import { table } from "../utils/table";
import { User } from "./models";

export class UserService {
  constructor(private knex: Knex) {}

  async checkLogin(username: string) {
    const trx = await this.knex.transaction();
    try {
      const user = await this.knex<User>(table.USER)
        .select("id", "username", "password")
        .where("username", username)
        .first();
      console.log(user);
      await trx.commit();
      return user;
      // if (user && (await checkPassword(plainPassword, user.password))) {
      //   return user;
      // }
    } catch (e) {
      await trx.rollback();
      return e;
    }
  }

  register = async (username: string, password: string) => {
    console.log(username,password);
    const insert = await this.knex<User>(table.USER)
      .insert({username,password});
    return insert;
  };
}
