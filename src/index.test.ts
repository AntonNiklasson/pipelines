import { expect, describe, it } from "vitest";
import { multiply } from "./index";

describe("multiply", () => {
  it("works", () => {
    expect(multiply(1, 2, 3)).toBe(10);
  });
});
