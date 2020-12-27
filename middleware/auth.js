module.exports = secret => (req, res, next) => {
  const token = req.header(process.env.JOB_HEADER);
  if (!token) return res.status(401).json({ msg: "No token, authorization denied" });
  return next();
};
