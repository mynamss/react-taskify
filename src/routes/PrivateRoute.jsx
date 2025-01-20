import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function PrivateRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  // if (isLoading) {
  //   // Tampilkan indikator loading saat memeriksa sesi
  //   return <div>Loading...</div>;
  // }

  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
}
