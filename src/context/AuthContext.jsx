import { createContext, useState, useEffect } from "react";
import { supabase } from "../configs/db/supabase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data: sessionData, error } = await supabase.auth.getSession();

      console.log(sessionData, error);

      if (sessionData.session) {
        setUser(data.session.user);
        setIsAuthenticated(!!sessionData.session);
        setIsLoading(false);
        localStorage.setItem("user", sessionData.session.user.email)
      }
      // TODO: next tambahkan error handling yang lebih baik
      // sementara:
      if (error) console.error("Error getting session:", error);
    };
    checkSession();

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
        setIsAuthenticated(!!session);
      }
    );

    return () => subscription.subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
