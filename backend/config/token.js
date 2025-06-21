import jwt from "jsonwebtoken";

const genToken = (userId) => {
  try {
    let token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return token;
  } catch (error) {
    console.log("token error", error);
    return null; // in case of error
  }
};

export default genToken;
