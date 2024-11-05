module.exports = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access denied');
  // Validasi token logika di sini, tambahkan sesuai kebutuhan.
  next();
};

