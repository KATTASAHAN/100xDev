import { atom, selector } from "recoil";
import axios from "axios";

export const navbarAtom = atom({
  key: "navbarAtom",
  default: selector({
    key: "navbarAtomSelector",
    get: async () => {
      const response = await axios.get("http://localhost:3000/");
      return response.data;
    },
  }),
});

export const totalCountSelector = selector({
  key: "totalCountSelector",
  get: ({ get }) => {
    const nbaAtom = get(navbarAtom);
    return (
      nbaAtom.network + nbaAtom.jobs + nbaAtom.notification + nbaAtom.messaging
    );
  },
});
