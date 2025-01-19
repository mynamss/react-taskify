import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../components/auth/AuthLayout";
import AuthForm from "../components/auth/AuthForm";
import IMAGE_COVER from "../assets/images/v-login-bg.jpg";
import { useImmer } from "use-immer";
import { supabase } from "../configs/db/supabase";
import CenterSnackbar from "../components/base/SnackBar";
import { authValidation } from "../utils/authValidation";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useImmer({
    email: {
      status: false,
      message: "",
    },
    password: {
      status: false,
      message: "",
    },
  });

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // input validation
    const isValid = authValidation("login", setError, {
      email,
      password,
    });
    if (!isValid) return;
    setLoading(true);

    try {
      const { data: user, error: errorAuth } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (errorAuth) {
        throw errorAuth;
      }

      setMessage("Login successful. Redirecting...");
      setLoading(false);
      setOpen(true);

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (e) {
      console.log("ERROR: " + e);
      setMessage(e.message);
      setLoading(false);
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout image={IMAGE_COVER}>
      <AuthForm
        title="Login to Taskify."
        description="Welcome Back! Let's login and set your tasks."
        isRegister={false}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        handleSubmit={handleSubmit}
        error={error}
        setError={setError}
        isLoading={loading}
      />
      <CenterSnackbar open={open} setOpen={setOpen} message={message} />
    </AuthLayout>
  );
}
