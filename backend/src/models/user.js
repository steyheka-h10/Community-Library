const db = require('../db');

async function usernameExists(username) {
  const result = await db.query(
    'SELECT COUNT(*) FROM users WHERE username = $1',
    [username]
  );
  return result.rows[0].count > 0;
}

module.exports = { usernameExists };