import update from "./update";
import execQuery from "./execQuery";

beforeAll(async () => {
  // TODO: Remover todos os dados do banco de dados
  await execQuery("");

  // TODO: Adicionar registro para poder serem editado
  await execQuery("");
});

describe("update", () => {
  it("should to update an item", async () => {
    const id = 0;
    const mockedData = {};
    const result = await update(id, mockedData);

    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
    expect(result).toEqual({ id, ...mockedData });
  });
});
