import Image from "next/image";
import Link from "next/link";
import ParticlesContainer from "./ui/Auth/ParticlesContainer";
import logo from '../../public/logo-main.svg';
import coding from '../../public/coding.svg';
export default function Home() {
  return (
    <main className="bg-primary w-full h-screen  flex justify-between">
      {/* <div className="flex item-center w-full h-full"> */}
        <div className="h-full w-1/2 bg-secondary">
        <div className="pl-10 pt-10">
        <Image src={logo} alt="logo" className="w-24 h-24"></Image>
        <h1 className="text-4xl text-white font-bold pt-4">Get Codified with our <span className="text-lime-500">New  <br />Features!</span></h1>
        <Image src={coding} alt="coding" className="p-24"></Image>
        </div>
     
        {/* <h1 className="mobile-h1">Login &amp; Get codified with <span>Our New Features</span></h1> */}
       




        </div>
        <div className="text-white h-full w-1/2  py-12 px-8 ">
        <div className="mt-16">
        <div className="">
          <h2 className="text-4xl font-semibold ">Login</h2>
          <p className="py-3 font-semibold">Don&apos;t have an account?
             <a href="/register/" className="text-lime-500"> Signup</a>
          
          </p>
          </div>
          <label htmlFor="Email" className="text-white py-2 my-8 font-medium">
            Email{" "}
          </label>
          <br />
          <input type="text" className="py-2 my-2  mb-12 rounded w-full" />
          <br />
          <label
            htmlFor="Password"
            className="text-white py-2  font-medium"
          >
            Password{" "}
          </label>
          <br />
          <input type="text" className="py-2 my-2 rounded w-full" />
          <br />
          <button className="bg-lime-400 text-white p-2  rounded-md font-semibold px-4 my-4 w-full">
            Login
          </button>
        </div>
     
          <ParticlesContainer />
        </div>
      {/* </div> */}
    </main>
  );
}
