// write a function to create a users table in your database.
import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://321710301025:0ajQCHhD3znt@ep-green-fire-42136329.us-east-2.aws.neon.tech/neondb?sslmode=require",
});

async function getUser(email: string) {
  try {
    client.connect();

    const query = "SELECT * FROM USERS WHERE EMAIL = $1";
    const res = await client.query(query, [email]);
    console.log(res);
  } catch (e) {
    console.log(e);
  } finally {
    client.end();
  }
}

getUser("umail");

// async function createUsersTable() {
//   try {
//     await client.connect();
// const result = await client.query(`
//       CREATE TABLE users (
//           id SERIAL PRIMARY KEY,
//           username VARCHAR(50) UNIQUE NOT NULL,
//           email VARCHAR(255) UNIQUE NOT NULL,
//           password VARCHAR(255) NOT NULL,
//           created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//       );
//   `);

//     const query = `INSERT INTO USERS (username, email, password) VALUES ($1 ,$2, $3)`;

//     await client.query(query, ["unam", "umail", "Passw"]);
//     const result = await client.query("SELECT * FROM USERS");
//     console.log(result);
//   } catch (e) {
//     console.log("HI", e);
//   } finally {
//     await client.end();
//   }
// }

// createUsersTable();
