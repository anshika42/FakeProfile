const express = require("express");


const app = express();
app.use(express.json());




app.listen(3000, () => {
  console.log(`backend Server running at port ${3000} `);
});
