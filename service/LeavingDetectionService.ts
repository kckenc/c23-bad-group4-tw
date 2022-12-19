import type { Knex } from "knex";
import type{ LeavingDetection } from "./models";

export class LeavingDetectionService {
  constructor (private knex: Knex) {}
  async checkLeaving(name:string){
    return await this.knex<LeavingDetection>("leaving_detection")
    .select("elderly.id", "elderly.name", "leaving_detection.is_solved","updated_at")
    .innerJoin("elderly", "leaving_detection.elderly_id", "elderly.id")
    .where ("elderly.name", name)
    .first()
    .returning("elderly.id")
  }
  async updateIsSolvedAlert(id:number){
    return await this.knex("leaving_detection")
    .where("elderly.id", id)
    .update({ 
      is_solved: false,
      updated_at: new Date(),
    })
    .returning('is_solved');
    
  }
}