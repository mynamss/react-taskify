import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../configs/db/supabase";

import AuthContext from "../context/AuthContext";

export function useAuth() {
  const { user, setUser, isAuthenticated, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user && !isLoading) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const login = async (email, password) => {
    const { data: userData, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setUser(userData.user);
    return { userData, error };
  };

  const register = async (fullname, email, password) => {
    const { data: userData, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;
    navigate("/");
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
    setUser(null);
    navigate("/login");
  };

  return {
    user,
    login,
    register,
    logout,
    isAuthenticated,
    isLoading,
  };
}
