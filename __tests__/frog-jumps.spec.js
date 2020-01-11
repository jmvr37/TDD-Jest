// // __tests__/frog-jumps.spec.js
// const frogJumps = require("../lib/frog-jumps.js");
// describe("frogJumps", () => {
//   describe("when start is equal to end", () => {
//     it("should return 0", () => {
//       const result = frogJumps(10, 10, 5);
//       expect(result).toEqual(0);
//     });
//   });

//   describe("when start is greater than end", () => {
//     it("should return 0", () => {
//       const result = frogJumps(10, -19, 200);
//       expect(result).toEqual();
//     });
//   });

//   describe("when start is 10 and end is 25, jumping with units of 5", () => {
//     it("should return 3", () => {
//       const result = frogJumps(10, 25, 5);
//       expect(result).toEqual(3);
//     });
//   });

//   describe("when start is 3 and end is 30, jumping with units of 5", () => {
//     it("should return 3", () => {
//       const result = frogJumps(3, 30, 5);
//       expect(result).toEqual(10);
//     });
//   });
// });

// const palindrome = require("../lib/palindrome");
// describe("reversy words", () => {
//   describe("firs word: Mom", () => {
//     it("should return true", () => {
//       expect(palindrome("Mom")).toEqual(true);
//     });
//     it("should return true", () => {
//       expect(palindrome("mom")).toEqual(true);
//     });
//     it("should return false", () => {
//       expect(palindrome("the Mummy")).toEqual(false);
//     });
//   });
// });

// const lab = require("../lib/lab");
// describe("count of letters that repeat", () => {
//   describe("aaabbbccc", () => {
//     it("should return", () => {
//       expect(lab("aaabbbcc")).toEqual("a3b3c3");
//     });
//   });
//   describe("not sequence", () => {
//     it("should return ghjff", () => {
//       expect(lab("ghjff")).toEqual("g1h1j1f2");
//     });
//   });
//   describe("abacbc", () => {
//     it("should return a2b2c1", () => {
//       expect(lab("abacbc")).toEqual("a2b2c1");
//     });
//   });
//   describe("ccbaaa", () => {
//     it("should return true", () => {
//       expect(lab("ccbaaa")).toEqual("a3b1c2");
//     });
//   });
// });
