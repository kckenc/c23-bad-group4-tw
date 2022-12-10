import { Knex } from "knex";

const userTableName = "users";
const cameraTableName = "cameras";
const elderlyTableName = "elderly";
const DetectionTableName = "leaving_detection"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(userTableName, (table)=> {
    table.increments();
    table.string("username").unique().notNullable;
    table.string("password").notNullable;
    table.timestamps(false, true);
  })  
  
  await knex.schema.createTable(cameraTableName, (table)=> {
    table.increments();
    table.string("ip").unique();
    table.integer("connected_to").unsigned().notNullable;
    table.foreign("connected_to").references(`${userTableName}.id`)
    table.timestamps(false, true);

  })  
  
  await knex.schema.createTable(elderlyTableName, (table)=> {
    table.increments();
    table.string("name");
    table.string("room_number").notNullable;
    table.integer("camera_id").unsigned().notNullable;
    table.foreign("camera_id").references(`${cameraTableName}.id`)
    table.timestamps(false, true);
  })  
  
  await knex.schema.createTable(DetectionTableName, (table)=> {
    table.increments();
    table.string("image");
    table.integer("no_of_time");
    table.integer("elderly_id").unsigned().notNullable;
    table.foreign("elderly_id").references(`${elderlyTableName}.id`)
    table.timestamps(false, true);
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(userTableName);
  await knex.schema.dropTableIfExists(cameraTableName);
  await knex.schema.dropTableIfExists(elderlyTableName);
  await knex.schema.dropTableIfExists(DetectionTableName);
}

