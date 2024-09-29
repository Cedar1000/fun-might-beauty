export const intlMoneyFormat = (amount) => {
  if (!amount) return 0.0;

  return new Intl.NumberFormat().format(amount);
};
