import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, PriceType } from "@prisma/client";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required to run the Prisma seed.");
}

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.setting.upsert({
    where: { id: "global" },
    update: {},
    create: {
      id: "global",
    },
  });

  const categories = [
    {
      slug: "inflables",
      name: "Inflables",
      description: "Brincolines y juegos inflables.",
    },
    {
      slug: "sillas",
      name: "Sillas",
      description: "Sillas para eventos y fiestas.",
    },
    {
      slug: "mesas",
      name: "Mesas",
      description: "Mesas para todo tipo de evento.",
    },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {
        name: category.name,
        description: category.description,
      },
      create: category,
    });
  }

  const inflables = await prisma.category.findUniqueOrThrow({
    where: { slug: "inflables" },
    select: { id: true },
  });

  const sillas = await prisma.category.findUniqueOrThrow({
    where: { slug: "sillas" },
    select: { id: true },
  });

  const mesas = await prisma.category.findUniqueOrThrow({
    where: { slug: "mesas" },
    select: { id: true },
  });

  const products = [
    {
      slug: "brincolin-castillo",
      name: "Brincolin Castillo",
      description: "Renta por bloque de 8 horas.",
      basePrice: "130.00",
      priceType: PriceType.FIXED,
      stock: 1,
      photos: ["https://images.unsplash.com/photo-1529634898247-2f4f95f4e6f7"],
      categoryId: inflables.id,
    },
    {
      slug: "silla-plegable-blanca",
      name: "Silla Plegable Blanca",
      description: "Precio por unidad.",
      basePrice: "2.00",
      priceType: PriceType.PER_UNIT,
      stock: 50,
      photos: ["https://images.unsplash.com/photo-1564078516393-cf04bd966897"],
      categoryId: sillas.id,
    },
    {
      slug: "mesa-rectangular-6ft",
      name: "Mesa Rectangular 6ft",
      description: "Mesa plegable para eventos.",
      basePrice: "12.00",
      priceType: PriceType.FIXED,
      stock: 20,
      photos: ["https://images.unsplash.com/photo-1517457373958-b7bdd4587205"],
      categoryId: mesas.id,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
