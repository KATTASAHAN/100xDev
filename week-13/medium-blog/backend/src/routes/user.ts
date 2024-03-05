import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.text(token);
  } catch (err) {
    console.log(err);
    c.status(411);
    return c.text("Invalid Details");
  }
});

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ message: "Invalid Creds" });
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.text(token);
  } catch (err) {
    console.log(err);
    c.status(411);
    return c.text("Invalid Details");
  }
});

// userRouter.delete("/delete", async (c) => {
//   const body = await c.req.json();

//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate());

//   try {
//     const deletedUser = await prisma.user.delete({
//       where: { id: body.id },
//     });

//     return c.json({ success: true, deletedUser });
//   } catch (err) {
//     console.log(err);
//     return c.text("Invalid Request");
//   }
// });
