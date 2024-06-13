"use client"
import Image from "next/image";
import Link from "next/link";
import ParticlesContainer from "../ui/Auth/ParticlesContainer";
import logo from '../../../public/logo-main.svg';
import coding from '../../../public/coding.svg';
import React, { useState } from 'react';
import { useAuth  } from "../context/AuthContext";
export default function Home() {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(username, password);
        console.log("login tiggred")
    };
  return (
    <main className="bg-primary w-full h-screen  flex justify-between">
      {/* <div className="flex item-center w-full h-full"> */}
        <div className="h-full w-1/2 bg-secondary">
        <div className="pl-10 pt-10">
          <div className="flex items-center">
          <Image src={logo} alt="logo" className="w-24 h-24"></Image>
          <h1 className="font-bold text-4xl text-white">Kavasam</h1>
          </div>
        
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
          <form onSubmit={handleSubmit}>
          <label htmlFor="Email" className="text-white py-2 my-8 font-medium">
            Email{" "}
          </label>
          <br />
          <input type="text"   
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} className="py-2 my-2  mb-12 rounded w-full text-black" />
          <br />
          <label
            htmlFor="Password"
            className="text-white py-2  font-medium"
          >
            Password{" "}
          </label>
          <br />
          <input type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} className="py-2 my-2 mb-4 rounded w-full text-black" />
          <br />
          <button type="submit" className="bg-lime-400 text-white p-2  rounded-md font-semibold px-4 my-4 w-full">
            Login
          </button>
          </form>
          
        </div>
     
          <ParticlesContainer />
        </div>
      {/* </div> */}
    </main>
  );
}
