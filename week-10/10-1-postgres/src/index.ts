import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://321710301025:0ajQCHhD3znt@ep-green-fire-42136329.us-east-2.aws.neon.tech/neondb?sslmode=require",
});

client.connect();

`CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
)`;
