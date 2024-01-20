import { atom } from "recoil";

export const todosAtom = atom({
  key: "todos",
  default: [
    {
      key: 1,
      title: "Title 1",
      description: "Description 1",
    },
    {
      key: 2,
      title: "Title 2",
      description: "Description 2",
    },
    {
      key: 3,
      title: "Title 3",
      description: "Description 3",
    },
  ],
});
