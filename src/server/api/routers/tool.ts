import { prisma } from "~/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const toolRouter = createTRPCRouter({
  index: publicProcedure.query(async () => {
    return await prisma.tool.findMany({
      include: {
        category: true,
        subCategories: true,
      },
    });
  }),
  // create: publicProcedure
  //   .input(ToolCreateInputSchema)
  //   .query(async ({ input }) => {
  //     await prisma.tool.create({
  //       name:
  //     });
  //   }),
});
