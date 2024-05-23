const express = require("express");


const app = express();
app.use(express.json());




app.listen(process.env.PORT, () => {
  console.log(`backend Server running at port ${3000} `);
});
