export function authValidation(
  type = "register",
  setError,
  { fullname = "", email = "", password = "" }
) {
  let isValid = true;

  setError((draft) => {
    if (type === "register") {
      // Validate fullname
      if (!fullname) {
        draft.fullname.status = true;
        draft.fullname.message = "required.";
        isValid = false;
      } else if (fullname.length < 4) {
        draft.fullname.status = true;
        draft.fullname.message = "Fullname must be at least 4 characters.";
        isValid = false;
      }
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      draft.email.status = true;
      draft.email.message = "required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      draft.email.status = true;
      draft.email.message = "Invalid email format.";
      isValid = false;
    }

    // Validate password
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!password) {
      draft.password.status = true;
      draft.password.message = "required.";
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      draft.password.status = true;
      draft.password.message =
        "Password must be at least 6 characters and include both letters and numbers.";
      isValid = false;
    }
  });

  return isValid;
}

export function isAuthenticated() {
  const token = JSON.parse(localStorage.getItem("supabase_session"));
  return !!token;
}
