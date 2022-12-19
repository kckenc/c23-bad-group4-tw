import { Knex } from "knex";

const userTableName = "users";
const cameraTableName = "cameras";
const elderlyTableName = "elderly";
const roomTableName = "room";
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
    table.string("mac_address").unique();
    table.timestamps(false, true);
  })  
  
  await knex.schema.createTable(roomTableName, (table)=>{
    table.increments();
    table.string("room_tag");
    table.integer("user_id").unsigned().notNullable;
    table.foreign("user_id").references(`${userTableName}.id`);
  })

  await knex.schema.createTable(elderlyTableName, (table)=> {
    table.increments();
    table.string("name");
    table.string("description");
    table.integer("camera_id").unsigned().notNullable;
    table.foreign("camera_id").references(`${cameraTableName}.id`);
    table.integer("room_id").unsigned().notNullable;
    table.foreign("room_id").references(`${roomTableName}.id`);
    table.timestamps(false, true);
  })  

  await knex.schema.createTable(DetectionTableName, (table)=> {
    table.increments();
    table.boolean("is_solved").defaultTo(true);
    table.integer("elderly_id").unsigned().notNullable;
    table.foreign("elderly_id").references(`${elderlyTableName}.id`);
    table.timestamps(false, true);
  })
  // await knex.schema.alterTable(DetectionTableName, (table) =>{
  //   table.integer("id")
  // })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(DetectionTableName);
  await knex.schema.dropTableIfExists(elderlyTableName);
  await knex.schema.dropTableIfExists(roomTableName);
  await knex.schema.dropTableIfExists(cameraTableName);
  await knex.schema.dropTableIfExists(userTableName);
  // await knex.schema.alterTable(DetectionTableName, (table) => {
  //   table.dropColumn("image")
  // });
}
