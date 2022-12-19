import { Knex } from "knex";
import * as bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('leaving_detection').del();
  await knex('room').del();
  await knex('elderly').del();
  await knex('users').del();

  const users = [
    { username: "kyle", password: await bcrypt.hash("1234", SALT_ROUNDS) },
    { username: "ken", password: await bcrypt.hash("1234", SALT_ROUNDS) },
    { username: "dylan", password: await bcrypt.hash("1234", SALT_ROUNDS)},
  ];

  const elderly = [
    {name: "kyle"},
    {name: "dylan"},
    {name: "ken"},

  ];

  const room = [
    {room_tag: "A"},
    {room_tag: "B"},
    {room_tag: "C"},
  ]

  // const leaving_detection = [
  //   {}
  // ]

  // Inserts seed entries
  await knex("users").insert(users);
  await knex("elderly").insert(elderly);
  await knex("room").insert(room);
}
