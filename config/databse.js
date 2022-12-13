import mysql from "mysql2";

const db = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: 'biblioteca'
})

export default db;