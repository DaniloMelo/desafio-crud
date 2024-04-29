import execQuery from "../controllers/execQuery.js";

export default async function updateUser(id, queryValues) {
  try {
    const values = []
    let query = "UPDATE users SET "

    if (queryValues.name) {
      values.push(queryValues.name)
      query += "userName = ?, "
    }

    if (queryValues.email) {
      values.push(queryValues.email)
      query += "userEmail = ?, "
    }

    query = query.slice(0, -2)

    query += " WHERE ID = ?"

    values.push(id)

    const data = await execQuery(query, values)

    return data

  } catch (error) {
    throw error
  }
}