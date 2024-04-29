// import execQuery from "./execQuery.js";

// export default async function read({ }) {
//   // TODO: Implementar query
//   const query = "";
//   const result = await execQuery(query);

//   // TODO: Retornar registro do banco de dados
//   return result;
// }

import getAllusers from "../services/getAllusers.js"

export default async function read(request, response) {
  try {
    const [result] = await getAllusers()

    if (!result || result.length === 0) {
      return response.status(400).json({ error: "No users where found" })
    }

    response.status(200).json({
      message: "Search for all users completed successfully.",
      data: result
    })

  } catch (error) {
    console.error(`Error when fetching data. Error: ${error}`)
    return response.status(500).json({ error: error.message || "Internal Server Error" })
  }
}
