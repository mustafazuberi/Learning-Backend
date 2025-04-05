const asyncHandler = (requestHandler) => async (req, res, next) => {
  try {
    await requestHandler(req, res, next);
  } catch (err) {
    res.status(err.code || 500).json({
      status: false,
      message: err.message || "Internal Server Error",
    });
  }
};

export default asyncHandler;
