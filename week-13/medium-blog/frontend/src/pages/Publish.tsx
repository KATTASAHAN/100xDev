import { useState } from "react";
import AppBar from "../components/AppBar";
import Button from "../components/Button";
import envRouter from "../controlers/router";
import { BLOG_ROUTES } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  return (
    <div>
      <AppBar />
      <div className="flex flex-col gap-4 p-10 max-w-5xl mx-auto">
        <input
          type="text"
          placeholder="Title"
          className="text-4xl leading-[3rem] focus:outline-none"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          rows={15}
          placeholder="Desceiption"
          className="text-xl focus:outline-none"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <div className="flex justify-end">
          <Button
            label="Publish"
            css="py-1 m-1 rounded-full bg-green-700"
            isDisabled={!title || !description || isDisabled}
            onclick={async () => {
              setIsDisabled(true);
              const ENDPOINT = envRouter() + BLOG_ROUTES;
              try {
                const response = await axios.post(
                  ENDPOINT,
                  {
                    title,
                    content: description,
                  },
                  {
                    headers: { Authorization: localStorage.getItem("token") },
                  }
                );
                navigate("/blog/" + response.data.id);
              } catch (e) {
                setIsDisabled(false);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Publish;
