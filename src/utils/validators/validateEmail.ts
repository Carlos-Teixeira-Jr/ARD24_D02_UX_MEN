export function validateEmail(email: string): {
  errorMsg: string;
  isValid: boolean;
} {
  let emailValue = email.trim();
  let errorMsg = "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    errorMsg = "Invalid email format";
  }

  return {
    errorMsg: errorMsg,
    isValid: errorMsg === "",
  };
}
