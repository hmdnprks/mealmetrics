/*
Create a server with the following specifications:

1. Use express node module and import it
2. Create a server with express and name it app
3. Get the port from the environment variable PORT or use 8080
4. enable body parser to accept json data
5. state which port the server is listening to
*/
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());
app.use('/openai', require('./router'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}
);