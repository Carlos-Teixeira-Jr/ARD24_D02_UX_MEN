export function formatEmail(email) {
    let emailValue = email.trim();
    return emailValue ? emailValue.toLowerCase() : emailValue;
}
