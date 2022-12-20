import type { Knex } from "knex";
import type{ LeavingDetection } from "./models";

export class LeavingDetectionService {
  constructor (private knex: Knex) {}
  async checkLeaving(name:string){
    return await this.knex<LeavingDetection>("leaving_detection")
    .select("elderly.id", "elderly.name", "leaving_detection.is_solved","leaving_detection.updated_at")
    .rightJoin("elderly", "leaving_detection.elderly_id", "elderly.id")
    .where ("elderly.name", name)
    // .andWhere("leaving_detection.is_solved",false)
    .first()
    .returning("elderly.id")
  }
  async updateIsSolvedAlert(id:number){
    return await this.knex("leaving_detection")
    .where("elderly_id", id)
    .update({ 
      is_solved: false,
      updated_at: new Date(),
    })
    // .insert({ 
    //   elderly_id: id,
    //   is_solved: false,
    //   updated_at: new Date(),
    // })
    .returning('is_solved');
    
  }
  async closeAlert(id:number){
    return await this.knex("leaving_detection")
    .where("elderly_id", id)
    .update({ 
      is_solved: true,
      updated_at: new Date(),
    })
    .returning('is_solved');

  }
}