import { Router } from "express";
import ProductController from "../controllers/ProductController.js";
import ProductCategoryController from "../controllers/ProductCategoryController.js";

const Routes = Router();

Routes.get('/products', ProductController.index);
Routes.get('/products/:id', ProductController.findOne);

Routes.post('/products', ProductController.create);

Routes.get('/categories', ProductCategoryController.index);
Routes.post('/categories', ProductCategoryController.create);

export default Routes;