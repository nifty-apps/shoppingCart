export const currencyFormater = (price) => {
  return price.toLocaleString("bn-BD", { style: "currency", currency: "BDT" });
};
