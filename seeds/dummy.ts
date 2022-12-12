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
    {name: "mary", room: "A"},
    {name: "betty", room: "B"},
    {name: "john", room: "A"},
    {name: "tracy", room: "C"},
    {name: "scarlett", room: "B"},
  ];

  const cameras = [
    {ip:"192.168.1.104"},
    {ip:"192.168.1.20"},
    {ip:"192.168.1.102"},
    {ip:"192.168.1.109"},
    {ip:"192.168.1.45"},
  ]
  // Inserts seed entries
  await knex("users").insert(users);
  await knex("elderly").insert(elderly);
  await knex("cameras").insert(cameras);
}
