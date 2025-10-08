const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// routes
const projectRoutes = require("./routes/projectRoute.ts");
const taskRoutes = require("./routes/taskRoutes.ts");
const  searchRoutes = require("./routes/searchRoute.ts");
const userRoutes = require("./routes/userRoutes");
const teamRoutes = require('./routes/teamRoute');

// configuration
dotenv.config();
const app  = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());


app.get("/", (req: any, res: { send: (arg0: string) => void; }) => {
  res.send("Hello from  Express server!");
});
app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);
app.use("/search", searchRoutes);
app.use("/users", userRoutes);
app.use('/teams', teamRoutes);

const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});