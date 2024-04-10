import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pasword: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
