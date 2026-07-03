const express = require('express')
const app = express()

const PORT = 3002

//web server:
app.use(express.static("frontend"))


app.listen(PORT, function() {
    console.log("Succesfully running at http://localhost:" + PORT)
});

//'npm install express' to install express module