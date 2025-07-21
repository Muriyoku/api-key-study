import './config.database';
import { sql } from 'bun';

await sql`
  CREATE TABLE IF NOT EXISTS keys (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    key VARCHAR(2048) NOT NULL UNIQUE, 
    valid BOOLEAN DEFAULT TRUE, 
    role VARCHAR(20) DEFAULT 'user'
  )
`;