missingInteger = arr => {
  let filteredArray = arr.filter(i => i > 0);
  let sortedArray = filteredArray.sort();
  if (sortedArray[0] !== 1) {
    return 1;
  }
  for (let j = 1; j < arr.length; j++) {
    if (sortedArray[j] - sortedArray[j - 1] > 1) {
      return sortedArray[j - 1] + 1;
    }
  }
  return sortedArray[sortedArray.length - 1] + 1;
};
