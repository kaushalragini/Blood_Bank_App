const testController = (req, res) => {
  res.status(200).send({
    message: "test routesss",
    success: true,
  });
};

module.exports = { testController };
