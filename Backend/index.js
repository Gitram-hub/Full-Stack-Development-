const http = require('http');
const sum = require('./fetchAPI');
const { readData, writeData } = require('./usefsmodule');
const fs = require('fs').promises;

const PORT = 4002;

const server = http.createServer(async (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  if (req.url === '/msg' && req.method === "GET") {
    res.setHeader('Content-Type', 'text/html');
    return res.end("<h2>Greeting of the day</h2>");
  }

  else if (req.url === "/data" && req.method === "GET") {
    res.setHeader('Content-Type', 'application/json');
    const data = await sum();
    return res.end(JSON.stringify({ msg: data }));
  }

  else if (req.url === "/datawrite" && req.method === "GET") {
    res.setHeader('Content-Type', 'application/json');
    const data = await writeData();
    return res.end(JSON.stringify({ msg: data }));
  }

  else if (req.url === "/dataread" && req.method === "GET") {
    res.setHeader('Content-Type', 'application/json');
    const data = await readData();
    return res.end(JSON.stringify({ msg: data }));
  }

  else if (req.url === "/register" && req.method === "POST") {

    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", async () => {
      try {

        if (!body) {
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify({ msg: "Empty body received" }));
        }

        const { name, email, password } = JSON.parse(body);

        let arr = [];

        try {
          const fdata = await fs.readFile('student.json', 'utf-8');
          arr = JSON.parse(fdata);
        } catch {
          arr = [];
        }

        const status = arr.find(ele => ele.email === email);

        res.setHeader('Content-Type', 'application/json');

        if (status) {
          return res.end(JSON.stringify({ msg: "Email already registered" }));
        }

        arr.push({ name, email, password });

        await fs.writeFile('student.json', JSON.stringify(arr, null, 2));

        return res.end(JSON.stringify({ msg: "Student registered successfully" }));

      } catch (err) {
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ msg: "Invalid JSON format" }));
      }
    });
  }

  else if (req.url === "/login" && req.method === "POST") {

    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", async () => {

      try {

        if (!body) {
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify({ msg: "Empty body received" }));
        }

        const { email, password } = JSON.parse(body);

        let arr = [];

        try {
          const fdata = await fs.readFile('student.json', 'utf-8');
          arr = JSON.parse(fdata);
        } catch {
          arr = [];
        }


        res.setHeader('Content-Type', 'application/json');

        if (!user) {
          return res.end(JSON.stringify({ msg: "Email not registered" }));
        }

        if (user.password !== password) {
          return res.end(JSON.stringify({
            msg: "Wrong password"
          }));
        }

        return res.end(JSON.stringify({
          msg: "Login successfully"
        }));

      } catch (err) {
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ msg: "Invalid JSON format" }));
      }

    });
  }

  else {
    res.setHeader('Content-Type', 'text/html');
    return res.end("<h2 style='color:red'>Invalid end point</h2>");
  }

});

server.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});