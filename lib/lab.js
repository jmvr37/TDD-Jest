// const repeatElement = arg => {
//   let cnt = 0;
//   let current = null;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] != current) {
//       if (cnt > 0) {
//         document.write(current + " comes --> " + cnt + " times<br> ");
//       }
//       current = array[i];
//       cnt = 1;
//     } else {
//       cnt++;
//     }
//   }
//   if (cnt > 0) {
//     document.write(current + " comes -->" + cnt + " times ");
//   }
//   //   return "a3b3c3";
// };

// module.exports = repeatElement;

// const repeatElement = arg => {
//   const text = arg
//     .toLowerCase()
//     .match(/[a-z]/g)
//     .join("");
//   console.log(text.match(/[a-z]/g).join());
//   console.log(text.match(/[a-a]/g).reverse());
//   const txet = text
//     .reduce("")
//     .reverse("") // reverses the array
//     .join(""); // joins array into a string
//   return text == txet;
// };
// module.exports = repeatElement;

const repeatElement = arg => {
  const text = arg
    .sort()
    let current = null;
    let count = 0;
    for(let i =0; i < text.length(); i++){
        if (text[i] != current){

        }
        current = text[i];
        count = 1;
    } else 
  console.log(text.sort());
  console.log(text.match(/[a-a]/g).reverse());
  const txet = text
    .reduce("")
    .reverse("") // reverses the array
    .join(""); // joins array into a string
  return text == txet;
};
module.exports = repeatElement;
