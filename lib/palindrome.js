const madam = arg => {
  const text = arg
    .toLowerCase()
    .match(/[a-z]/g)
    .join("");
  console.log(text.match(/[a-z]/g).join());
  console.log(text.match(/[a-a]/g).reverse());
  const txet = text
    .split("")
    .reverse("") // reverses the array
    .join(""); // joins array into a string
  return text == txet;
};
module.exports = madam;
