// import execQuery from "./execQuery.js";
// import read from "./read.js";


// export default async function update(id, { }) {
//   TODO: Implementar query
//   const queryUpdate = "";
//   await execQuery(queryUpdate);

//   const result = await read();

//   TODO: Retornar registro do banco de dados
//   return result;
// }

import getUserById from "../services/getUserById.js";
import updateUser from "../services/updataUser.js";

export default async function (request, response) {
  try {
    const { id } = request.params
    const { userName, userEmail } = request.body

    const [result] = await getUserById(id)

    if (!result || result.length === 0) {
      return response.status(204).json({ error: "User not found." })
    }

    await updateUser(id, { name: userName, email: userEmail })

    const [updatedResult] = await getUserById(id)

    response.status(200).json({
      message: "User updated successfully.",
      data: updatedResult
    })

  } catch (error) {
    console.error(`Error on update user: ${error.message}`)
    return response.status(500).json({ error: error.message || "Internal Server Error." })
  }
}
