const express = require("express");
const connectDB = require("./config/db");
const productRoute = require("./routes/product.route.js");
const app = express();
require("dotenv").config();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello From Node API Updated");
});

//connect to db
connectDB().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
