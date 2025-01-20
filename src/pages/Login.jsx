import { useState } from "react";
import { useImmer } from "use-immer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import { supabase } from "../configs/db/supabase";
import { authValidation } from "../utils/authValidation";

import AuthLayout from "../components/auth/AuthLayout";
import AuthForm from "../components/auth/AuthForm";
import CenterSnackbar from "../components/base/SnackBar";

import IMAGE_COVER from "../assets/images/v-login-bg.jpg";

export default function Login() {
  const { login } = useAuth();
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
      const { userData, error } = await login(email, password);

      if (error) throw error;

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
