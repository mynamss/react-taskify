import { useState } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import AuthForm from "../components/auth/AuthForm";
import IMAGE_COVER from "../assets/images/v-register-bg.jpg";
import { Link } from "react-router-dom";

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering:", fullname, email, password);
    window.location.href = "/";
  };

  return (
    <AuthLayout image={IMAGE_COVER} imageSideStyles={"1rem 0 0 1rem"}>
      <AuthForm
        title="Register to Taskify."
        description="Welcome with us! Let's start a new journey for your future"
        isRegister={true}
        fullname={fullname}
        setFullname={setFullname}
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
