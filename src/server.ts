import express from "express";
import router from "./routes/students-routes";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
