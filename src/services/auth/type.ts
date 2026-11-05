import type z from "zod";
import type { me } from "./schema";

export interface ILoginPayLoad{
    email: string;
    password: string;
}
export interface IRegisterPayLoad extends ILoginPayLoad{
username:string;
}

export type MeType=z.infer<typeof me>