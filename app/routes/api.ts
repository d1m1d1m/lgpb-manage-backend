import { Router } from "express";
import ProductController from "../controllers/ProductController.js";

const Routes = Router();

Routes.get('/products', ProductController.index);
Routes.get('/products/:id', ProductController.findOne);

Routes.post('/products', ProductController.create);

export default Routes;