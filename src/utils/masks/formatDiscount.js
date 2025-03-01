export function formatDiscount(value) {
    const onlyNumbers = value.replace(/\D/g, "");
    let number = Math.min(100, Number(onlyNumbers));
    return `${number}%`;
}
