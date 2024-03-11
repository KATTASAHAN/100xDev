import { useState } from "react";
import { AuthType } from "../types";
import Button from "./Button";
import HaveAccount from "./HaveAccount";
import Header from "./Header";
import LabeledInput from "./LabeledInput";
import axios from "axios";
import { SigninInput, SignupInput } from "@katta_sahan/medium-common";
import { SIGN_IN, SIGN_UP, USER_ROUTES } from "../config";
import { useNavigate } from "react-router-dom";
import envRouter from "../controlers/router";

const Auth = ({ type }: AuthType) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput | SigninInput>({
    ...(type === "signup" ? { name: "" } : {}),
    email: "",
    password: "",
  });

  async function sendRequest() {
    const END_POINT =
      envRouter() + USER_ROUTES + (type === "signup" ? SIGN_UP : SIGN_IN);
    try {
      const response = await axios.post(END_POINT, postInputs);
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <div className="pb-10 w-96 flex justify-center">
          <Header header={type === "signup" ? "Create an account" : "Login "} />
        </div>
        {type === "signup" && (
          <LabeledInput
            label={"Username"}
            placeHolder={"Enter your username"}
            onchange={(e) => {
              setPostInputs((inputs) => ({ ...inputs, name: e.target.value }));
            }}
          />
        )}
        <LabeledInput
          label={"Email"}
          placeHolder={"xyz@email.com"}
          onchange={(e) => {
            setPostInputs((inputs) => ({
              ...inputs,
              email: e.target.value,
            }));
          }}
        />
        <LabeledInput
          label={"Password"}
          placeHolder={""}
          onchange={(e) => {
            setPostInputs((inputs) => ({
              ...inputs,
              password: e.target.value,
            }));
          }}
          type="password"
        />
        <div className="h-2"></div>
        <Button
          label={type === "signup" ? "Sign Up" : "Login"}
          onclick={sendRequest}
        />
        <HaveAccount type={type} />
      </div>
    </div>
  );
};

export default Auth;
