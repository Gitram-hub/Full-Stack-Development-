import http from "http"
import fetchData from "./getdata.js"

const PORT = 4005

const app = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  if (req.method === "OPTIONS") {
    res.writeHead(204)
    return res.end()
  }

  try {
    if (req.url === "/msg" && req.method === "GET") {
      const serverdata = await fetchData()
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify({ msg: serverdata }))
    } 
    else if (req.url === "/data" && req.method === "POST") {
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify({ mesg: "Data inserted successfully" }))
    } 
    else {
      res.writeHead(404)
      res.end("not a message")
    }
  } catch {
    res.writeHead(500)
    res.end("Server error")
  }
})

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`)
})
