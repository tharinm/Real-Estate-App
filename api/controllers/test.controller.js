import jwt from "jsonwebtoken";

export const shouldBeLogin = async (req, res) => {
  console.log(req.userId);
  res.status(200).json({ message: "You ar authenticated" });
};

export const shouldBeAdmin = async (req, res) => {
  const token = req.cookies.token;

  if (!token)
    return res.status(401).json({ message: "User not authenticated!" });

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) return res.status(401).json({ message: "User jwt invalid!" });

    if (!payload.isAdmin) {
      return res.status(403).json({ message: "Not Authorized" });
    }
  });

  res.status(200).json({ message: "user Authenicated done !" });
};
