import { Link } from "react-router-dom";
import {
  FormControl,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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
  isLoading = false,
  setError,
  error,
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
            error={error.fullname.status}
            helperText={
              error.fullname.status
                ? error.fullname.message
                : ""
            }
            onChange={(e) => {
              setError((draft) => {
                draft.fullname.status = false;
                draft.fullname.message = "";
              });
              setFullname(e.target.value);
            }}
          />
        )}
        <TextField
          id="email"
          label="Email"
          variant="standard"
          type="email"
          value={email}
          error={error.email.status}
          helperText={error.email.status ? error.email.message : ""}
          onChange={(e) => {
            setError((draft) => {
              draft.email.status = false;
              draft.email.message = "";
            });
            setEmail(e.target.value);
          }}
        />
        <FormControl variant="standard">
          <TextField
            variant="standard"
            id="standard-adornment-password"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setError((draft) => {
                draft.password.status = false;
                draft.password.message = "";
              });
              setPassword(e.target.value);
            }}
            error={error.password.status}
            helperText={error.password.status ? error.password.message : ""}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={() => setShowPassword((show) => !show)}
                      onMouseDown={(e) => e.preventDefault()}
                      onMouseUp={(e) => e.preventDefault()}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        </FormControl>
        <Button
          className="submit-btn"
          variant="contained"
          color="primary"
          type="submit"
          fullWidth={true}
          loading={isLoading}
          loadingPosition="start"
        >
          {isRegister ? "Register" : "Login"}
        </Button>
        <p style={{ textAlign: "center" }}>
          {isRegister ? "Already have an account? " : "Don't have an account? "}
          <Link underline="none" to={isRegister ? "/login" : "/register"}>
            {isRegister ? "Login" : "Register"}
          </Link>
        </p>
      </form>
    </div>
  );
}
