const isValidDateFormat = (date: string): boolean => {
  if (date === "") return false;

  const regex = /^\d{2}\/\d{2}\/\d{4}$/;

  return regex.test(date);
};

export { isValidDateFormat };
