import execQuery from "../controllers/execQuery.js"

export default async function getAllusers() {
  return new Promise((resolve, reject) => {
    const data = execQuery("SELECT * FROM users")

    if (!data) {
      reject(data)
    }

    resolve(data)
  })
}

