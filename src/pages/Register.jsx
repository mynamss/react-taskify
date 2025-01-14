import { useState } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import AuthForm from "../components/auth/AuthForm";
import IMAGE_COVER from "../assets/images/v-register-bg.jpg";
import { supabase } from "../configs/db/supabase";
import CenterSnackbar from "../components/base/SnackBar";

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data: user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    const { data: profile, error: errorProfile } = await supabase
      .from("profiles")
      .insert([
        {
          id: user.user.id,
          full_name: fullname,
        },
      ]);

    if (errorProfile) {
      setMessage("Failed to insert profile. Contact your administrator");
      return;
    }

    setMessage("Registration successful. Check your email to confirm.");
    setOpen(true);
  };

  return (
    <AuthLayout image={IMAGE_COVER}>
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
        isOpen={open}
        message={message}
      />
      <CenterSnackbar open={open} setOpen={setOpen} message={message} />
    </AuthLayout>
  );
}
