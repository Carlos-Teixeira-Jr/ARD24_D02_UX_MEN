export function validatePassword(password: string): {
  errorMsg: string;
  isValid: boolean;
} {
  let passwordValue = password.trim();
  let errorMsg = "";

  if (passwordValue.length < 8) {
    errorMsg = "Password must be at least 8 characters";
  } else if (passwordValue.length > 80) {
    errorMsg = "Password must be less than 80 characters";
  } else if (!/[a-z]/.test(passwordValue)) {
    errorMsg = "Password must contain at least one lowercase letter";
  } else if (!/[A-Z]/.test(passwordValue)) {
    errorMsg = "Password must contain at least one uppercase letter";
  } else if (!/[0-9]/.test(passwordValue)) {
    errorMsg = "Password must contain at least one number";
  } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(passwordValue)) {
    errorMsg = "Password must contain at least one special character";
  }

  return {
    errorMsg,
    isValid: errorMsg === "",
  };
}
