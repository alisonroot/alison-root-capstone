import jwt from "jsonwebtoken";

const authorize = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .send("Please provide a JWT for authorization or please login");
  }

  const authToken = authHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).send("Invalid auth token");
  }
};

export default authorize;
