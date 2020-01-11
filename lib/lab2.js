// const uniqueCharacter = arg => {
//   let r = arg;
//   console.log(r);
//   for (let i = 0, len = arg.length; i < len; ++i) {
//     let text = arg[i];
//     r[text] = r[text] || 0;
//     ++r[text];
//   }
//   return r;
// };

// module.exports = uniqueCharacter;

// console.log(arg);

// return "r";

const uniqueCharacter = arg => {
  let st = arg;
  console.log(st);
  for (var i = 0; i < st.length; i++) {
    var c = st.charAt(i);
    if (st.indexOf(c) === i && st.indexOf()) {
      return c;
    }
    return null;
  }
};

module.exports = uniqueCharacter;

// if (st.indexOf(c) === i && st.indexOf(c, i + 1) == -1) {
