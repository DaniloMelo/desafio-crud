import read from "./read";
import execQuery from "./execQuery";

const mockedData = [];

beforeAll(async () => {
  // TODO: Remover todos os dados do banco de dados
  await execQuery("");
  
  // TODO: Adicionar registros para poder serem lidos
  await execQuery("");
});

describe("read", () => {
  it('should to read all items', async () => {
    const result = await read();

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBeDefined();
    expect(result).toHaveLength(mockedData.length);
    expect(result[1]).toEqual(mockedData[1]);
  });

  it('should to read an item', async () => {
    const result = await read(mockedData[1].id);

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBeDefined();
    expect(result).toHaveLength(mockedData.length);
    expect(result[0]).toEqual(mockedData[1]);
  });
});
