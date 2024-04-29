import getUserById from "../services/getUserById.js";

export default async function readById(request, response) {
  try {
    const { id } = request.params

    const [result] = await getUserById(id)

    if (!result || result.length === 0) {
      return response.status(404).json({ error: "User not found." })
    }

    const responseData = {
      message: "User search completed successfully.",
      data: result
    }

    response.status(200).json(responseData)

  } catch (error) {
    console.error(`Error when fetching data: ${error}`)
    return response.status(500).json({ error: error.message || "Internal Server Error." })
  }
}