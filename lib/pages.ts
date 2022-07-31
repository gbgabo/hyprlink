import { prisma } from "../db/client";

export async function getPage(username: string, slug: string) {
  const page = await prisma.page.findFirst({
    where: {
      author: {
        username: {
          equals: `${username}`,
        },
      },
      slug: {
        equals: `${slug}`,
      },
      published: true,
    },
  });

  return page;
}
