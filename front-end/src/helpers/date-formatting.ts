const dateFormatting = (date: string) => {
  const rawDate = date;
  const parts = rawDate.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

export { dateFormatting };
