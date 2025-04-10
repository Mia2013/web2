import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), '_db', 'webshop.db');

export const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Hiba az adatbázis megnyitásakor:', err.message);
  } else {
    console.log('Sikeres csatlakozás az adatbázishoz');
  }
});


export const dbAll = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

export const dbRun = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) return reject(err);
      resolve(this);
    });
  });
};

export const dbGet = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};