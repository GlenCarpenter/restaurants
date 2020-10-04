// Utility functions

export const paginateArray = (arr, chunk) => {
  const chunkedArray = [];
  for (let i = 0; i < arr.length; i += chunk) {
    chunkedArray.push(arr.slice(i, i + chunk));
  }

  return chunkedArray;
};
