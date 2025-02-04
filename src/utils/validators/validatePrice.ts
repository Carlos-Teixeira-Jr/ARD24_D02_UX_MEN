export function validatePrice(price: string): {
  errorMsg: string;
  isValid: boolean;
} {
  console.log("🚀 ~ validatePrice ~ price:", price)

  let cleanedPrice = price.trim().replace(/^\$/, "");
  let priceValue = parseFloat(cleanedPrice);
  let errorMsg = "";
  
  if (isNaN(priceValue) || priceValue < 1) {
    errorMsg = "Price must be at least 1 number";
  }

  console.log("🚀 ~ validatePrice ~ errorMsg:", errorMsg)


  return {
    errorMsg: errorMsg,
    isValid: errorMsg === "",
  };
}
