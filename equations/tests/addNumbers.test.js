import { addNumbers } from "../modules/addNumbers";

// What is it?
describe("addNumbers function", () => {
  //What should it do?
  it("should add two positive numbers", () => {
    const [
      mockNum1,
      mockNum2,
      mockNum3,
      mockNum4,
      mockNum5,
      mockNum6,
    ] = [3, 5, 9, 20, 12, 21];

    //What do we expect?
    expect.assertions(3);
    expect(addNumbers(mockNum1, mockNum2)).toBe(
      8
    );
    expect(addNumbers(mockNum3, mockNum4)).toBe(
      29
    );
    expect(addNumbers(mockNum5, mockNum6)).toBe(
      33
    );
  });

  it("should sum positive AND negative numbers (and decimals)", () => {
    expect(addNumbers(-1.5, 3)).toBe(1.5);
  });

  it("should sum correctly with only one value passed", () => {
    expect(addNumbers(3)).toBe(3);
  });

  it("should give back an error when 3 numbers are passed", () => {
    expect(addNumbers(1, 2, 3)).toThrowError(
      "This function accepts only two arguments"
    );
  });
});
