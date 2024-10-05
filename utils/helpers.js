// export const intlMoneyFormat = (amount) => {
//   if (!amount) return 0.0;

//   return new Intl.NumberFormat().format(amount);
// };


// export const intlMoneyFormat = (amount) => {
//   if (!amount) return "0.00";

//   return new Intl.NumberFormat(undefined, {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   }).format(amount);
// };

export const intlMoneyFormat = (amount) => {
  if (!amount) return "0.00";

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};
