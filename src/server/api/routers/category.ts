import { prisma } from "~/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const categoryRouter = createTRPCRouter({
  index: publicProcedure.query(async () => {
    return await prisma.category.findMany({
      include: {
        tool: true,
      },
    });
  }),
});
