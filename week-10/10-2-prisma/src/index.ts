import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type User = {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
};
function InsertUser({ username, password, firstName, lastName }: User) {
  prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
  });
}
