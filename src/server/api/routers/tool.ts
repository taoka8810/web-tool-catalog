// import { prisma } from "~/server/db";
// import { createTRPCRouter, publicProcedure } from "../trpc";
// import { z } from "zod";
// import { Category } from "@prisma/client";

// export const toolRouter = createTRPCRouter({
//   index: publicProcedure.query(async () => {
//     return await prisma.tool.findMany({
//       include: {
//         category: true,
//       },
//     });
//   }),
//   create: publicProcedure
//     .input(
//       z.object({
//         name: z.string(),
//         description: z.string(),
//         icon: z.string(),
//         category: z.any().transform((d) => d as Category),
//       })
//     )
//     .query(async ({ input }) => {
//       await prisma.tool.create({
//         data: {
//           name: input.name,
//           description: input.description,
//           icon: input.icon,
//           category: {
//             connect: {
//               name: input.category.name,
//               slug: input.category.slug,
//             },
//           },
//           subCategories: {
//             createMany: {
//               data: input.subCategories,
//             },
//           },
//         },
//       });
//     }),
// });
