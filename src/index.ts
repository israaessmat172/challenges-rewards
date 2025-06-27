import express from "express";
import { DataSource } from "typeorm";
import { dataSource } from "./config/typeorm";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

dataSource
  .initialize()
  .then(() => {
    console.log("📦 Database connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Database connection error:", error);
  });

app.get("/", (req, res) => {
  res.send("Challenge platform is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
