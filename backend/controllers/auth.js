const User = require("../models/user");

exports.signUp = (req, res) => {
  const user = new User(req.body);
  console.log("REQ DATA ", req.body);
  user.save((err, user) => {
    if (err) {
      return res
        .status(400)
        .json({ err: "Unable to save data at this moment!" });
    }
    return res.json({
      name: user.name,
      email: user.email,
      status: "Data saved successfully",
    });
  });
};
