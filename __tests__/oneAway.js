const lab3 = require("../lib/lab3");
describe("oneAway", () => {
  describe("when passed string one remove away", () => {
    it("should return true", () => {
      expect(lab3("pale", "ple")).toEqual(true);
      expect(lab3("pales", "pale")).toEqual(true);
    });
  });
  describe("when passed string one replace away", () => {
    it("should return true", () => {
      expect(lab3("pale", "bale")).toEqual(true);
    });
  });
  describe("when passed string two replace edits away", () => {
    it("should return false", () => {
      expect(lab3("pale", "bake")).toEqual(false);
    });
  });
  describe("when passed string w one char replaced and one inserted", () => {
    it("should return false", () => {
      expect(lab3("pale", "bake")).toEqual(false);
    });
  });

  // describe("when passed some string generated by loops", () => {
  //   const str = "toast";
  //   let decreasingStr = str;
  //   for (const i = 0; i < str.length; ++i) {
  //     it(`with edit distnce of ${i} should return ${i < 2}`, () => {
  //       expect(lab3(str, descreasingStr.slice(i))).toEqual(i < 2);
  //     });
  //   }
  // });
});
