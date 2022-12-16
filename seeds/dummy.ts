import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  // await knex("table_name").del();
  const users = [
    { username: "kyle", password: "1234" },
    { username: "ken", password: "1234" },
    { username: "dylan", password: "1234" },
  ];

  const elderly = [
    {name: "mary", description: ""},
    {name: "betty",description: ""},
    {name: "john",description: ""},
    {name: "tracy",description: ""},
    {name: "scarlett",description: ""},
  ];

  const room = [
    {room_tag: "A"},
    {room_tag: "B"},
    {room_tag: "C"},

  ]

  // Inserts seed entries
  await knex("users").insert(users);
  await knex("elderly").insert(elderly);
  await knex("cameras").insert(room);
}
