import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./src/config/database.js";
import productRoutes from "./src/routes/productRoutes.js";
import seedProducts from "./src/seeders/seedProducts.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ success: true, message: "Backend is running successfully" });
});
app.use("/api/products", productRoutes);

// Sync database and start server
sequelize
  .sync({ alter: true })
  .then(async () => {
    console.log("Database connected and synced successfully");
    await seedProducts();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
