export function formatPrice(value) {
    const onlyNumbers = value.replace(/\D/g, "");
    const formatted = onlyNumbers.replace(/(\d+)(\d{2})$/, "$1.$2");
    return formatted ? `$ ${formatted}` : value;
}
