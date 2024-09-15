import express from "express";
import { isAdmin, requireSignIn } from "../../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
const router = express.Router();
//routes
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);
//update
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);
//getAll category
router.get("/get-category", categoryController);
// single category
router.get("/single-category/:slug", singleCategoryController);
//delete category
router.delete("/delete-category/:id", deleteCategoryController);

export default router;
