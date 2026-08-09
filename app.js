const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });

    res.end(`
        <html>
            <head>
                <title>AWS DevOps Project</title>
            </head>
            <body>
                <h1>🚀 DevOps Project 4</h1>
                <h2>Running on AWS EC2</h2>
                <p>Dockerized Node.js Application</p>
                <p>Deployed using DevOps practices</p>
            </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});