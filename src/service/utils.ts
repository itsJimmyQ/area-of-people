export const formatNumberToNaturalLanguage = (value: number) => {
  let formattedValue = value.toString();

  if (value >= 1000000) {
    formattedValue = (value / 1000000).toFixed(2).replace(/\.0$/, "") + "M";
  } else if (value >= 1000) {
    formattedValue = (value / 1000).toFixed(2).replace(/\.0$/, "") + "K";
  }

  return formattedValue;
};
