import axios from "axios";

async function getUserDetails() {
  let response = { data: { email: "email", name: "name" } };
  try {
    response = await axios.get(
      "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
    );
  } catch (e) {
    response["data"] = {
      email: "email@gm.com",
      name: "Eniru",
    };
    console.log(e);
  }
  return response.data;
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userData?.name}</div>

          {userData?.email}
        </div>
      </div>
    </div>
  );
}
