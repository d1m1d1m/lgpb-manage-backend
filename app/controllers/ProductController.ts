import { Request, Response } from 'express';
import { prisma } from '../../lib/prima.js';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';

export default class ProductController
{

  /**
   * Liste tous les produits (25 en 25).
   */
  public static async index(req : Request, res: Response)
  {
    try {
      const allProducts = await prisma.product.findMany({ take: 25 });

      return res.json({ product: allProducts });
    }
    catch (error) {
      console.error('Oulalala ça va pas !');  
    }
  }

  /**
   * Trouver un produit par son code EAN.
   */
  public static async findOne(req : Request, res: Response)
  {
    try {
      const codeToFind = req.params.id;
      const productFound = await prisma.product.findFirst({
        where: { sku: codeToFind }
      });

      return res.json({
        product: productFound
      });
    } catch (e) {
      const error = e as PrismaClientKnownRequestError;
      
      return res.json({
        error: {
          code: error.code,
          message: "Ce code article existe déjà dans la base donnée !"
        }
      });
    }
  }

  /**
   * Création d'un nouveau produit.
   */
  public static async create(req : Request, res: Response)
  {
    try {
      const newProduct = await prisma.product.create({
        data: {
          sku: "3423720008175",
          name: "BARRE CEREALES ABRICOT X 6 (125G)",
          sales_label: 's',
          tag_label: 's',
        }
      });

      return res.json({ product: newProduct });
    }
    catch (e) {
      const error = e as PrismaClientKnownRequestError;
      
      return res.json({
        error: {
          code: error.code,
          message: "Ce code article existe déjà dans la base donnée !"
        }
      });
    }
  }

}