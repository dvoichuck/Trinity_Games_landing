const express = require('express')
const app = express()
const publicDir = "./views";

// loading html, css and other files into static server files
app.use(express.static(publicDir));

// rendering a web page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))