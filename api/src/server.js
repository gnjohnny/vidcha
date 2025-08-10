import express from "express";
import path from "path";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

import AuthRoutes from "./routes/auth.routes.js";
import UserRoutes from "./routes/user.routes.js";
import ChatRoutes from "./routes/chat.routes.js";

import { connectDB } from "./db/db.js";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: false, limit: "30mb" }));
app.use(cookieParser());
app.use(
    cors({
        origin: [process.env.CLIENT_URL],
        credentials: true,
    }),
);

app.use("/api/auth", AuthRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/chat", ChatRoutes);

const clientDistpath = path.join(__dirname, "client", "dist");

if (process.env.NODE_ENV === "production") {
    app.use(express.static(clientDistpath));

    app.get("*", (req, res) => {
        res.sendFile(path.join(clientDistpath, "index.html"));
    });
}

app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
    connectDB();
});
