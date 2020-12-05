const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

async function openDb() {
  return sqlite.open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
}

async function setup() {
  const db = await openDb();
  await db.migrate(
    {
      migrationsPath: './src/migrations',
      force: 'last', // forces database to refresh to migration when server restarts (remove in prod)
    },
  );
}

setup();
