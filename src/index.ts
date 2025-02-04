import express from "express";
import routes from "./routes";
import initializeMongo from "./db/mongo";

const app = express();
const PORT = process.env.PORT || 3000;

initializeMongo();

app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
