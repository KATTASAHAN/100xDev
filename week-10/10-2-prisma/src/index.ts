import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type User = {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
};

type UpdateParams = {
  firstName: string;
  lastName: string;
};

async function insertUser({ username, password, firstName, lastName }: User) {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
  });
  return res;
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    where: { username },
    data: { firstName, lastName },
  });
  return res;
}

async function getUser(username: string) {
  const res = await prisma.user.findFirst({ where: { username } });
  return res;
}

async function createTodo(userId: number, title: string, description: string) {
  const res = await prisma.todo.create({
    data: {
      title,
      description,
      userId,
    },
  });
  return res;
}

async function getTodos(userId: number) {
  const res = await prisma.todo.findMany({
    where: { userId },
  });
  return res;
}

async function getTodosAndUserDetails(userId: number) {
  const todos = await prisma.todo.findMany({
    where: { userId },
    select: {
      user: true,
      title: true,
      description: true,
    },
  });
  return todos;
}

console.log(
  insertUser({
    username: "user@hmail.com",
    password: "password",
    firstName: "urfirst",
    lastName: "urlast",
  }),
  updateUser("user@hmail.com", { firstName: "first", lastName: "last" }),
  getUser("user@hmail.com"),
  createTodo(1, "title", "description"),
  getTodos(1),
  getTodosAndUserDetails(1)
);
