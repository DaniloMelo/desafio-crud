import create from "./create";
import execQuery from "./execQuery";

beforeAll(async () => {
  // TODO: Remover todos os dados do banco de dados
  await execQuery("");
});

describe("create", () => {
  it('should to create an item', async () => {
    const mockedData = {};
    const result = await create(mockedData);

    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
  })
});
