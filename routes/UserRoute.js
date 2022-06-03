const { saveData } = require("../controller/UserController");

router.post(
  "/saveData",
  ValidateRequest({
    body: {
      type: "object",
      properties: {
        name: {
          type: "string",
          minLength: 1,
          maxLength: 255,
        },
        mobile: {
          type: "string",
          format: "phoneNumber",
        },
        email: {
          type: "string",
          format: "email",
        },
        password: {
          type: "string",
        },
      },
    },
  }),
  async (req, res) => {
    try {
      let user = await saveData(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

module.exports = router;
