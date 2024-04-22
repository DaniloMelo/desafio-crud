import execQuery from "./execQuery.js";
import read from "./read.js";

import teste from "../services/service.js";

export default async function update(id, { }) {
  // TODO: Implementar query
  const queryUpdate = "";
  await execQuery(queryUpdate);

  const result = await read();

  // TODO: Retornar registro do banco de dados
  return result;
}
