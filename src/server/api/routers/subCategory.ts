import { prisma } from "~/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const subCategoryRouter = createTRPCRouter({
  index: publicProcedure.query(async () => {
    return await prisma.subCategory.findMany({
      include: {
        tool: true,
      },
    });
  }),
});
