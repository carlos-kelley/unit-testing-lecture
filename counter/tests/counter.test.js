import { expect } from "vitest";
import { Counter } from "../modules/counter";

// This bad tests tests implementation. We are making an assumption that count starts at 0
describe("Counter", () => {
  it("should increase count to 1 when ticked"),
    () => {
      const counter = new Counter();

      counter.tick();

      expect(counter.count).toBe(1);
    };
});

//This tests behavior no matter what count was initialized as. GOOD
describe("Counter", () => {
  it("should increase count by 1 when ticked"),
    () => {
      const counter = new Counter();
      let expectedCount = counter.count + 1;

      counter.tick();

      assert.equal(counter.count, expectedCount);
    };
});
