import execQuery from "../controllers/execQuery.js"

// export default async function getUserById(id) {
//   return new Promise((resolve, reject) => {
//     try {
//       const data = execQuery("SELECT * FROM users WHERE ID = ?", [id])

//       if (data.error) {
//         reject(data)
//       }

//       resolve(data)
//     } catch (error) {
//       console.error(`Error when fetching data: ${error}`)
//       throw new Error("Error when fetching data.")
//     }
//   })
// }


export default async function getUsersById(id) {
  try {
    const data = await execQuery("SELECT * FROM users WHERE ID = ?", [id])

    if (data.length === 0) {
      throw new Error("User not found")
    }

    return data[0]

  } catch (error) {
    console.error(`Error when fetching data - ${error}`)
    throw new Error("Error when fetching data.")
  }
}