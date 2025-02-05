export function validatePrice(price: string): {
  errorMsg: string;
  isValid: boolean;
} {

  let cleanedPrice = price.trim().replace(/^\$/, "");
  let priceValue = parseFloat(cleanedPrice);
  let errorMsg = "";
  
  if (isNaN(priceValue) || priceValue < 1) {
    errorMsg = "Price must be at least 1 number";
  }

  return {
    errorMsg: errorMsg,
    isValid: errorMsg === "",
  };
}
