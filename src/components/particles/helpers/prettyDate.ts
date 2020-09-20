export const prettyDate = (dateString: string) => {
  if (!dateString) return null;

  const dateObject = new Date(dateString);
  return dateObject.toLocaleDateString();
};

export default prettyDate;
