import mysql from "mysql2";

const db = mysql.createConnection({
  host: 'localhost',
  user: 'aluno',
  password: 'icarodog123',
  database: 'biblioteca'
})

export default db;