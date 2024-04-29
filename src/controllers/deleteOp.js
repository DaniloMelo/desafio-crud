// import execQuery from "./execQuery.js";

// export default async function deleteOp(id) {
//   TODO: Implementar query
//   const queryUpdate = "";
//   await execQuery(queryUpdate);
// }

import deleteById from "../services/deleteById.js";
import getUserById from "../services/getUserById.js";

export default async function deleteOp(request, response) {
  try {
    const { id } = request.params

    const [result] = await getUserById(id)

    if (!result || result.length === 0) {
      return response.status(404).json({ error: "No users found." })
    }

    await deleteById(id)

    return response.status(200).json({
      message: "User deleted successfully."
    })
  } catch (error) {
    console.error(`Error on deleting user: ${error.message}`)
    return response.status(500).json({ error: error.message || "Internal Server Error." })
  }
}