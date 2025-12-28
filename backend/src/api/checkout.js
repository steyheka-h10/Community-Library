const db = require('../db');

async function checkBookAvailability(bookId) {
  const result = await db.query(
    'SELECT COUNT(*) FROM copies WHERE book_id = $1 AND available = true',
    [bookId]
  );
  return result.rows[0].count > 0;
}

app.post('/checkout', async (req, res) => {
  const { bookId } = req.body;
  const isAvailable = await checkBookAvailability(bookId);
  if (!isAvailable) {
    return res.status(400).json({ error: 'Book not available' });
  }
  // proceed with checkout
  res.json({ success: true });
});

module.exports = { checkBookAvailability };