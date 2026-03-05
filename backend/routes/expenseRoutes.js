import express from "express";
import {
  addExpense,
  getAllExpense,
  deleteAllExpenses,
  deleteExpenseWithID,
  downloadExpenseExcel,
} from "../controllers/expenseController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", protect, addExpense);
router.get("/get", protect, getAllExpense);
router.get("/downloadexcel", protect, downloadExpenseExcel);
router.delete("/all", protect, deleteAllExpenses);
router.delete("/:id", protect, deleteExpenseWithID);

export default router;
