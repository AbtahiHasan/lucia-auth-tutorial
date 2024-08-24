import { Metadata } from "next";

import Image from "next/image";
import signUpImage from "../../../../public/auth.jpg";
import LoginForm from "./LoginForm";
export const metadata: Metadata = { title: "login" };

const LoginPage = () => {
  return (
    <main className="h-screen bg-[#00000022] w-full flex justify-center items-center">
      <div className="p-5 shadow-sm rounded-lg border bg-white">
        <div className=" gap-5 my-3 lg:grid grid-cols-2">
          {" "}
          <div className=" w-full px-5  flex flex-col justify-center">
            <h2 className="text-2xl lg:text-3xl bold text-center">Login</h2>
            <LoginForm />
          </div>
          <div className="hidden lg:block ">
            <Image
              className="w-full h-full object-cover rounded-lg"
              height={300}
              width={300}
              src={signUpImage}
              alt="sign up image"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
