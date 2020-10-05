// Utility functions

export const paginateArray = (arr, chunk) => {
  const chunkedArray = [];
  for (let i = 0; i < arr.length; i += chunk) {
    chunkedArray.push(arr.slice(i, i + chunk));
  }

  return chunkedArray;
};

export const titleCase = str => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
