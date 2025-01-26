import chalk from "chalk";
import { express } from "../shared/constants/index.js";
import userRoutes from "../modules/users/index.js";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Routes Page is Preset");
  console.log(chalk.bgYellow("Routes Page is Preset"));
});
router.use("/user", userRoutes);
export default router;
