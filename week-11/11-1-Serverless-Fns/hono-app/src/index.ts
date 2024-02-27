import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  console.log(c.req);
  console.log(c.res);

  return c.text("Hello Hono!");
});

export default app;
