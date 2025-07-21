import 'dotenv/config';
import { SQL } from "bun";

new SQL({
  max: 10, 
  idleTimeout: 30, 
  maxLifetime: 0, 
  connectionTimeout: 30,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  username: process.env.PGUSERNAME,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});