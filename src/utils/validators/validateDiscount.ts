export function validateDiscount(price: string): {
  errorMsg: string;
  isValid: boolean;
} {

  let cleanedPrice = price.trim().replace(/\%/g, "");
  let discountValue = Number(cleanedPrice);
  let errorMsg = "";
  
  if (discountValue < 0) {
    errorMsg = "Discount percentage must be at least 0 number";
  }
  if (discountValue > 100) {
    errorMsg = "Discount percentage must be less than 100";
  }

  return {
    errorMsg: errorMsg,
    isValid: errorMsg === "",
  };
}
