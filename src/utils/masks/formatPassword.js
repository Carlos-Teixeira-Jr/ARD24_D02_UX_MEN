export function formatPassword(password) {
    const cleanedPassword = password.trim().replace(/\s/g, "");
    const passwordLenght = cleanedPassword.length;
    const formattedPassword = "*".repeat(passwordLenght);
    return formattedPassword;
}
