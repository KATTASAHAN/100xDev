import { RecoilRoot, useRecoilValue } from "recoil";
import "./App.css";
import { navbarAtom, totalCountSelector } from "./store/atoms";

function App() {
  return (
    <>
      <RecoilRoot>
        <NavBar />
      </RecoilRoot>
    </>
  );
}

function NavBar() {
  const navbarNotifications = useRecoilValue(navbarAtom);
  const totalCount = useRecoilValue(totalCountSelector);

  return (
    <>
      <button>
        Network (
        {navbarNotifications.network >= 100
          ? "99+"
          : navbarNotifications.network}
        )
      </button>
      <button>
        Jobs (
        {navbarNotifications.jobs >= 100 ? "99+" : navbarNotifications.jobs})
      </button>
      <button>
        Notifications (
        {navbarNotifications.notification >= 100
          ? "99+"
          : navbarNotifications.notification}
        )
      </button>
      <button>
        Messaging (
        {navbarNotifications.messaging >= 100
          ? "99+"
          : navbarNotifications.messaging}
        )
      </button>
      <button>Me ({totalCount})</button>
    </>
  );
}

export default App;
