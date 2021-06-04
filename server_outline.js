const http = require("http");

const todos = [
  { id: 1, text: "TODO One" },
  { id: 2, text: "TODO Two" },
  { id: 3, text: "TODO Three" },
];

const server = http.createServer((req, res) => {
  const { method, url } = req;
  let body = [];
  let status = 404;

  req
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();

      const response = {
        success: false,
        data: null,
      };

      if (method === "GET" && url === "/todos") {
        response.success = true;
        response.data = todos;
      } else if (method === "POST" && url === "/todos") {
        const { id, text } = JSON.parse(body);
        if (!id || !text) {
          status = 404;
        } else {
          todos.push({ id, text });
          status = 201;
          response.success = true;
          response.data = todos;
        }
      }

      res.writeHead(status, {
        "Content-Type": "application/json",
        "X-Powered-By": "Node.js",
      });

      res.end(JSON.stringify(response));
    });
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
