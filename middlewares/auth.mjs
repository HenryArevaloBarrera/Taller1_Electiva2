import jwt from "jsonwebtoken";
const SECRET_KEY = "mi_clave_secreta"; // mejor en .env

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token" });

  const token = authHeader.split(" ")[1]; // Bearer <token>
  if (!token) return res.status(401).json({ error: "Token inválido" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // guardamos info del usuario en req.user
    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido o expirado" });
  }
};
