import { Request, Response } from "express";
import { prisma } from "../../lib/prima.js";

export default class ProductCategoryController
{

  public static async index(req: Request, res: Response)
  {
    try {
      const allCatgories = await prisma.category.findMany();

      return res.json({ categories: allCatgories });
    }
    catch (error) {
      console.error('Oulalala ça va pas !');  
    }
  }

  public static async create(req: Request, res: Response)
  {
    try {
      const newCategory = await prisma.category.create({
        data: {
          name: "Vrac"
        }
      });

      return res.json({ category: newCategory });
    }
    catch (e) {
      const error = e;
      console.log('oulalalala');
    }
  }

}