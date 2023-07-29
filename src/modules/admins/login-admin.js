const { compare } = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../../shared/errors");
const config = require("../../shared/config");
const Admin = require("./Admin");

const loginAdmin = async ({ username, password }) => {
  const existing = await Admin.findOne({ username, is_deleted: false });

  if (!existing) {
    throw new UnauthorizedError("Incorrect username or password.");
  }

  const match = await compare(password, existing.password);

  if (!match) {
    throw new UnauthorizedError("Incorrect username or password.");
  }

  const token = jwt.sign(
    {
      user: {
        id: existing._id,
        role: existing.is_super ? "super_admin" : "admin",
      },
    },
    config.jwt.secret,
    { expiresIn: "24h" }
  );

  return token;
};

module.exports = loginAdmin;
