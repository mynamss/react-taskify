import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function AuthForm({
  title,
  description,
  isRegister,
  email,
  setEmail,
  password,
  setPassword,
  fullname,
  setFullname,
  showPassword,
  setShowPassword,
  handleSubmit,
}) {
  return (
    <div>
      <div className="content-head">
        <h2 className="title">{title}</h2>
        <p className="login-desc">{description}</p>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        {isRegister && (
          <TextField
            id="fullname"
            label="Full Name"
            variant="standard"
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        )}
        <TextField
          id="email"
          label="Email"
          variant="standard"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormControl variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={() => setShowPassword((show) => !show)}
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseUp={(e) => e.preventDefault()}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div className="action-btn">
          <Button
            className="login-btn"
            variant="contained"
            color="primary"
            disabled={email.trim() === "" || password.trim() === ""}
            type="submit"
            fullWidth={true}
          >
            {isRegister ? "Register" : "Login"}
          </Button>
          <p>
            {isRegister
              ? "Already have an account? "
              : "Don't have an account? "}
            <Link underline="none" to={isRegister ? "/login" : "/register"}>
              {isRegister ? "Login" : "Register"}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
