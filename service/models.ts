export interface User {
    id: number;
    username: string;
    password: string;
}

export interface Elder {
  id:number;
  name:string;
}

export interface LeavingDetection{
  id:number;
  is_solved:boolean;
  elderly_id:number;
  created_at?: Date;
  modified_at?:Date;
}