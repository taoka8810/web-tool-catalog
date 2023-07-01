import { prisma } from "~/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const toolRouter = createTRPCRouter({
  index: publicProcedure.query(async () => {
    return await prisma.tool.findMany({
      include: {
        category: true,
      },
    });
  }),
});
