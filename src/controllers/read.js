import execQuery from "./execQuery.js";
import teste from "../services/service.js";
import getAllusers from "../services/getAllusers.js"

// export default async function read({ }) {
//   // TODO: Implementar query
//   const query = "";
//   const result = await execQuery(query);

//   // TODO: Retornar registro do banco de dados
//   return result;
// }


export default async function read(request, response) {
  try {
    const data = await getAllusers()

    if (!data) {
      response.status(400).json({ error: "No users where found" })
      throw new Error("No users where found")
    }

    const responseData = {
      error: null,
      result: data.map(user => ({
        id: user.id,
        userName: user.userName,
        userEmail: user.userEmail
      }))
    }

    response.json(responseData)
  } catch (error) {
    console.error(`Error when fetching data. Error: ${error}`)
    response.status(500).json({ error: error.message || "Internal Server Error" })
  }
}