import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "../configs/db/supabase";
// import { isAuthenticated } from "../utils/authValidation";

export default function PrivateRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      setIsAuthenticated(!!data.session);
      setLoading(false);
    };
    checkSession();
  }, []);

  if (loading) {
    // Tampilkan indikator loading saat memeriksa sesi
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
}
