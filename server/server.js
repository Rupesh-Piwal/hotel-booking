import express from "express";
import AuthRoute from "./routes/auth.route.js";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const PORT = 8080;

app.use(express.json());
app.use("/api/auth", AuthRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
