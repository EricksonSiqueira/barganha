export const transformLiquidUnit = (amountInMl: number) => {
  if (amountInMl >= 1000) {
    return `${amountInMl / 1000} L`;
  }

  return `${amountInMl} ml`;
};
