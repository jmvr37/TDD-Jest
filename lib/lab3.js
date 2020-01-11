const away = (str1, str2) => {
  const array1 = str1.split("");
  const array2 = str2.split("");
  const combine = array1.concat(array2);
  let unmatched = 0;
  for (i = 0; i <= combine.length; i++) {
    const char1 = combine[i];
    const match = array2.includes(char1);
    if (!match) {
      unmatched++;
    }
  }
  if (unmatched <= 2) {
    return true;
  } else {
    return false;
  }
};

module.exports = away;
