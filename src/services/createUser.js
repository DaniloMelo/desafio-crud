import execQuery from "../controllers/execQuery.js";

export default async function createUser(userName, userEmail) {
  try {
    const query = "INSERT INTO users (userName, userEmail) VALUES (?, ?)"
    const data = await execQuery(query, [userName, userEmail])
    return data

  } catch (error) {
    throw error
  }
}
