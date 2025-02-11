export function formatPrice(value: string): string {
  const onlyNumbers = value.replace(/\D/g, "");
  const formatted = onlyNumbers.replace(/(\d+)(\d{2})$/, "$1.$2");
  return formatted ? `$ ${formatted}` : value;
}