import deleteOp from "./delete";
import execQuery from "./execQuery";

beforeAll(async () => {
  // TODO: Remover todos os dados do banco de dados
  await execQuery("");

  // TODO: Adicionar registro para apagar
  await execQuery("");
});

describe("delete", () => {
  it("should to delete an item", async () => {
    const id = 0;
    await deleteOp(id);
    // TODO: rodar query para tentar trazer o ID apagado
    const result = await execQuery("");

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBeTruthy();
    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });
});
