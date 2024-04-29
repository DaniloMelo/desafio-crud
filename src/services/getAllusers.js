import execQuery from "../controllers/execQuery.js"

export default async function getAllusers() {
  try {
    const query = "SELECT * FROM users"
    const data = await execQuery(query)
    return data

  } catch (error) {
    console.error(`Error when fetching data: ${error}`);
    throw new Error("Error when fetching data.");
  }
}