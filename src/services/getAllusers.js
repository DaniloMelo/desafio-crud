import execQuery from "../controllers/execQuery.js"

export default async function getAllusers() {
  try {
    const data = await execQuery("SELECT * FROM users")
    return data
  } catch (error) {
    console.error(`Error when fetching data: ${error}`);
    throw new Error("Error when fetching data.");
  }
}