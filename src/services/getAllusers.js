import execQuery from "../controllers/execQuery.js"

// export default async function getAllusers() {
//   return new Promise((resolve, reject) => {
//     const data =  execQuery("SELECT * FROM users")

//     if (data.error) {
//       reject(data)
//     }

//     resolve(data.results)
//   })
// }


export default async function getAllusers() {
  try {
    const data = await execQuery("SELECT * FROM users")
    return data
  } catch (error) {
    console.error(`Error when fetching data: ${error}`);
    throw new Error("Error when fetching data.");
  }
}