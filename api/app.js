import express from "express";
import postRoutes from "./routes/post.route.js";

const app = express();

app.use("/api/post", postRoutes);

app.listen(8800, () => {
  console.log("Server is running");
});
