import express from "express";
import {
  addIncome,
  getAllIncome,
  deleteAllIncome,
  deleteIncomeWithID,
  downloadIncomeExcel,
} from "../controllers/incomeController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", protect, addIncome);
router.get("/get", protect, getAllIncome);
router.get("/downloadexcel", protect, downloadIncomeExcel);
router.delete("/all", protect, deleteAllIncome);
router.delete("/:id", protect, deleteIncomeWithID);

export default router;
