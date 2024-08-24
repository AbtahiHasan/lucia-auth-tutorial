import { Metadata } from "next";
import SignUpFrom from "./SignUpForm";
import Image from "next/image";
import signUpImage from "../../../../public/auth.jpg";
export const metadata: Metadata = { title: "signup" };

const SignUpPage = () => {
  return (
    <main className="h-screen bg-[#00000022] w-full flex justify-center items-center">
      <div className="p-5 shadow-sm rounded-lg border bg-white">
        <div className=" gap-5 my-3 lg:grid grid-cols-2">
          {" "}
          <div className=" w-full px-5 ">
            <h2 className="text-2xl lg:text-3xl bold text-center">Sign UP</h2>
            <SignUpFrom />
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

export default SignUpPage;
