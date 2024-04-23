// import execQuery from "./execQuery.js";
import createUser from "../services/createUser.js";

// export default async function create({ }) {
//   // TODO: Implementar query
//   const query = "";
//   const result = await execQuery(query);

//   // TODO: Retornar ID criado
//   return result;
// }

export default async function create(request, response) {
  try {
    const userName = request.body.userName;
    const userEmail = request.body.userEmail;

    if (!userName || !userEmail) {
      return response.status(400).json({ error: "User or email not provided." })
    }

    const newUser = createUser(userName, userEmail)

    const responseData = {
      error: null,
      result: {
        id: newUser.id,
        userName: newUser.userName,
        userEmail: newUser.userEmail
      }
    }

    response.status(201).json({
      success: true,
      message: "User Created Successfully.",
      data: responseData
    })

  } catch {
    console.error(`Error creating user: ${error}`)
    response.status(500).json({ error: error.message || "Internal Server Error." })
  }
}