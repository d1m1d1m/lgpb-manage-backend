/*
  Warnings:

  - Added the required column `label_title` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Product" ADD COLUMN     "label_title" TEXT NOT NULL;
