const handleError = (err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    message: "Something wrong",
    ok: false,
  });
};

module.exports = handleError;
