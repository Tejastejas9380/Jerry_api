require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "AI server 🚀" }));
app.use("/api", require("./routes/AiBtnRoute"));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
