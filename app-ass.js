const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter User</title></head>");
    res.write(
      "<body><h1>Hi! Welcome to this page</h1><form action = '/create-user' method= 'POST' ><input type='text' name='user'><button type='submit'>Submit</button></form></body>"
    );
    return res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Users</title></head>");
    res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const user = parsedBody.split("=")[1];
      fs.writeFile("./user-ass.txt", user, (error) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.write("<html>");
  res.write(" <head><title>My First Assignment Page</title></head>");
  res.write("<body>My First Assignment</body>");
  res.end();
});

server.listen(3000);
