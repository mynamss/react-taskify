import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../components/auth/AuthLayout";
import AuthForm from "../components/auth/AuthForm";
import IMAGE_COVER from "../assets/images/v-login-bg.jpg";
import { useImmer } from "use-immer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password123") {
      login({ email });
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <AuthLayout image={IMAGE_COVER} imageSideStyles={"1rem 0 0 1rem"}>
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
      />
    </AuthLayout>
  );
}
