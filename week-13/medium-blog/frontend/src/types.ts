export type HeaderType = {
  header: string;
};
export type AuthType = { type: "signup" | "signin" };
export type BlogType = {
  id: Number;
  title: string;
  content: string;
  published: boolean;
  author: {
    name?: string;
  };
};
export type Env = "local" | "prod";
