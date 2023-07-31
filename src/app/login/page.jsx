"use client";
import React from "react";
import "./style.css";
import Logo from "@/components/Logo/Logo";
import Woman from "../../../public/static/smiling.jpg";
import { Input } from "@/components/Form/Input/Input";
import { Button } from "@/components/Button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  return (
    <div className="login">
      <div className="container">
        <Logo />
        <p className="login-header">Please login to your account.</p>
        <form className="form-container">
          <Input label="Email Address" />
          <Input label="Password" type="password" />
          <div className="link">
            <Link href={"/dashboard"}>Forgot Password?</Link>
          </div>
          <div className="log-btn">
            {" "}
            <Button
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${Woman.src})`,
        }}
      >
        <div>
          <h1 className="bg-header">SHOP LESS WIN MORE</h1>
          <div className="logo">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
