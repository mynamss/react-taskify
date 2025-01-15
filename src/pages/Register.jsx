import { useState } from "react";
import { useImmer } from "use-immer";
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useImmer({
    fullname: {
      status: false,
      message: "",
    },
    email: {
      status: false,
      message: "",
    },
    password: {
      status: false,
      message: "",
    },
  });
  console.log(error);

  // input validation
  const validateInputs = () => {
    if (!fullname || !email || !password) {
      setError((draft) => {
        draft.fullname.status = true;
        draft.email.status = true;
        draft.password.status = true;
        draft.fullname.message = fullname ? "" : "required.";
        draft.email.message = email ? "" : "required.";
        draft.password.message = password ? "" : "required.";
      });
      return false;
    }
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      setOpen(true);
      return false;
    }
    return true;
  };

  // submit button
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;
    setLoading(true);

    try {
      const { data: user, error: errorAuth } = await supabase.auth.signUp({
        email,
        password,
      });

      if (errorAuth) {
        throw errorAuth;
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
        throw errorProfile;
      }

      setMessage("Registration successful. Check your email to confirm.");
      setLoading(false);
      setOpen(true);
    } catch (e) {
      setMessage(e.message);
      setLoading(false);
      setOpen(true);
    }
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
        isLoading={loading}
        setError={setError}
        error={error}
      />
      <CenterSnackbar open={open} setOpen={setOpen} message={message} />
    </AuthLayout>
  );
}
