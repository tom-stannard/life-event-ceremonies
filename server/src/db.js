// MySQL storage for enquiries (GoDaddy cPanel MySQL). Optional: only used when
// DB_HOST, DB_USER, DB_PASSWORD and DB_NAME are set. The table is created on
// first use. This is the foundation for the future admin view.
import mysql from 'mysql2/promise';

let pool;
let ready;

export const dbConfigured = () =>
  Boolean(process.env.DB_HOST && process.env.DB_USER && process.env.DB_NAME && process.env.DB_PASSWORD !== undefined);

function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      connectionLimit: 3,
      charset: 'utf8mb4',
    });
    ready = pool.query(`
      CREATE TABLE IF NOT EXISTS enquiries (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        first_name VARCHAR(80) NOT NULL,
        last_name VARCHAR(80) NOT NULL,
        email VARCHAR(200) NOT NULL,
        phone VARCHAR(40) NOT NULL,
        ceremony_type VARCHAR(40) NOT NULL,
        ceremony_date DATE NULL,
        location VARCHAR(200) NULL,
        message TEXT NOT NULL,
        heard_from VARCHAR(200) NULL,
        status VARCHAR(20) NOT NULL DEFAULT 'new',
        INDEX (created_at),
        INDEX (status)
      ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
    `);
  }
  return pool;
}

export async function saveEnquiry(e) {
  const db = getPool();
  await ready;
  const [result] = await db.execute(
    `INSERT INTO enquiries (first_name, last_name, email, phone, ceremony_type, ceremony_date, location, message, heard_from)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [e.firstName, e.lastName, e.email, e.phone, e.ceremonyType, e.date || null, e.location || null, e.message, e.heardFrom || null],
  );
  return result.insertId;
}
