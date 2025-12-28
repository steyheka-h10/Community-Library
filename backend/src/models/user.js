const db = require('../db');

async function usernameExists(username) {
  const result = await db.query(
    'SELECT EXISTS(SELECT 1 FROM users WHERE username = $1) AS exists',
    [username]
  );
  return result.rows[0].exists;
}

module.exports = { usernameExists };