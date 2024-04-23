import getUserById from "../services/getUserById.js";

export default async function readById(request, response) {
  try {
    const id = request.params.id;
    if (!id || isNaN(id)) {
      response.status(400).json({ error: "User ID not provided or incorrect." })
    }

    const data = await getUserById(id)

    const responseData = {
      error: null,
      result: {
        id: data.id,
        userName: data.userName,
        userEmail: data.userEmail
      }
    }

    response.json(responseData)
  } catch (error) {
    console.error(`Error when fetching data: ${error}`)
    response.status(500).json({ error: error.message || "Internal Server Error." })
  }
}