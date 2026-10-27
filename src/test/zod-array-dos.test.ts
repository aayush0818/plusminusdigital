import { describe, expect, it } from "vitest";
import { z } from "zod";

// GHSA-mrhx-c7xc-m3w5 (CVE-2023-54404): validating an oversized array against a
// constrained array schema (e.g. `.max(...)`) must not accumulate one validation
// issue per failing element. Collecting an unbounded number of issues exhausts
// memory (CWE-770). Zod >= 4.6.6 short-circuits with a size check before
// parsing elements, bounding the number of issues.
describe("zod oversized constrained array (GHSA-mrhx-c7xc-m3w5)", () => {
  it("short-circuits with a bounded number of issues", () => {
    const schema = z.array(z.number()).max(100);
    const oversized = new Array(100_000).fill("not-a-number");

    const result = schema.safeParse(oversized);

    expect(result.success).toBe(false);
    // Must stay bounded; pre-fix versions emit one issue per element (100_001).
    expect(result.error.issues.length).toBeLessThanOrEqual(10);
    // The reported problem is the size violation, not per-element type errors.
    expect(result.error.issues[0].code).toBe("too_big");
  });
});
