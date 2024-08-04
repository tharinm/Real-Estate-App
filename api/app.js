import express from "express";
import postRoutes from "./routes/post.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import testRoutes from "./routes/test.route.js";
import userRoutes from "./routes/user.route.js";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Allow only this origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow credentials
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/test", testRoutes);

app.listen(8800, () => {
  console.log("Server is running");
});
