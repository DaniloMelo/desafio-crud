import execQuery from "./execQuery";

describe("execQuery", () => {
  it("should to run a query", async () => {
    const result = await execQuery("select 1+1 as result;");

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBeTruthy();
    expect(result[0]).toHaveProperty("result");
    expect(result[0].result).toBe(2);
    expect(result[0]).toEqual({ result: 2 });
  });
});
