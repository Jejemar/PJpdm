
export const getDaysDiff = (dateA, dateB) => {
  if (typeof dateA === "string" && typeof dateB === "string") {
    return Math.floor((new Date(dateB) - new Date(dateA)) / (1000 * 3600 * 24));
  }

  return Math.floor((dateB - dateA) / (1000 * 3600 * 24));
};

export const formatDate = function (date) {
  return date.toLocaleDateString();
};
