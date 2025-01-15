import jwt from "jsonwebtoken";

export default function generateToken(data) {
  const JWT_SECRET_KEY = import.meta.env.VITE_SUPABASE_JWT_SECRET;
  return jwt.sign(data, JWT_SECRET_KEY, { expiresIn: "1h" });
}
