import express from "express";

const app = express();

const PORT = 8080;

app.get("/hey",(req, res) => {
    res.send("hey")
})

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
