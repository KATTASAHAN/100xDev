import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  const profiles = [
    {
      uid: 1,
      profileImg:
        "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Rika",
      country: "Japan",
      metrix: [
        { uid: 1, title: "Followers", value: "80K" },
        { uid: 2, title: "Likes", value: "803K" },
        { uid: 3, title: "Photos", value: "1.4K" },
      ],
    },
  ];
  return (
    <>
      {profiles.map((profile) => (
        <ProfileCard key={profile.uid} profile={profile} />
      ))}
    </>
  );
}

export default App;
