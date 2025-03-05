import express from "express";
import AuthRoute from "./routes/auth.route.js";
const app = express();

const PORT = 8080;

app.use(express.json());
app.use("/api/auth", AuthRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
