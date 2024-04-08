import { SigninInput, SignupInput } from "@katta_sahan/medium-common";

export type HeaderType = {
  header: string;
};
export type AuthType = { type: "signup" | "signin" };
export type AuthPayloadType = {
  type: "signup" | "signin";
  postInputs: SignupInput | SigninInput;
};
export type BlogType = {
  id: Number;
  title: string;
  content: string;
  published: boolean;
  postedOn: Date;
  author: {
    name?: string;
  };
};
export type FullBlogType = {
  title: string;
  content: string;
  postedOn: Date;
  author: {
    name?: string;
  };
};
export type Env = "local" | "prod";
