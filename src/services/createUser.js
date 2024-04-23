import execQuery from "../controllers/execQuery.js";

export default async function createUser(userName, userEmail) {
  return new Promise((resolve, reject) => {
    try {
      const data = execQuery("INSERT INTO users (userName, userEmail) VALUES (?, ?)", [userName, userEmail])

      if (!data) {
        reject(data)
      }

      resolve(data)
    } catch (error) {
      console.error(`Error creating user: ${error}`)
      throw new Error("Error creating user")
    }
  })
}