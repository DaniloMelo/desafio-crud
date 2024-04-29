// import execQuery from "./execQuery.js";

// export default async function create({ }) {
//   // TODO: Implementar query
//   const query = "";
//   const result = await execQuery(query);

//   // TODO: Retornar ID criado
//   return result;
// }

import createUser from "../services/createUser.js";

export default async function create(request, response) {
  try {
    const userName = request.body.userName;
    const userEmail = request.body.userEmail;

    if (!userName || !userEmail) {
      return response.status(400).json({ error: "User or email not provided." })
    }

    const [newUser] = await createUser(userName, userEmail)

    const responseData = {
      message: "User created successfully.",
      result: {
        id: newUser.insertId,
        userName,
        userEmail
      }
    }

    response.status(201).json({
      message: "User Created Successfully.",
      data: responseData
    })

  } catch {
    console.error(`Error creating user: ${error}`)
    return response.status(500).json({ error: error.message || "Internal Server Error." })
  }
}