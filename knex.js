import dotenv from "dotenv";
import Knex from "knex";
import knexConfig from "./knexfile.js";

dotenv.config();

const environment = process.env.NODE_ENV || "development";
const knex = Knex(knexConfig[environment]);

export default knex;
