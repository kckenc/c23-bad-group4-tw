import { User } from "./models";
import pg from "pg";
import { hashPassword } from "../utils/hash";

export class UserService {
  constructor(private dbClient: pg.Client) {}

  async getUserByUsername(username: string) {
    const queryResult = await this.dbClient.query<User>(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    return queryResult.rows[0];
  }

  async createUser(username: string, password: string) {
    const hashedPassword = await hashPassword(password);
    const insertResult = await this.dbClient.query<User>(
      /*SQL */ `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username, password`,
      [username, hashedPassword]
    );

    // update user
    return insertResult.rows[0];
  }
}