"use client"
import React, { useState } from 'react'
import dummyImg from "../public/ Decentralise_gaming.jpeg"
import Image from 'next/image';
import { addBetaAccess } from '../lib/databasefunctions';
import { FaStarOfLife } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { IoWallet } from "react-icons/io5";

const toastOptions = {
  position: "bottom-right",
  autoClose: 2000,
  pauseOnHover: true,
  theme: "dark",
  draggable: true,
};

const WhiteList = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [format, setFormat] = useState("");
  const [message, setMessage] = useState([]);
  const [errors, setErrors] = useState();
  // const [address, setAddress] = useState()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    social: "",
    country: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form...", formData)

    const res = await addBetaAccess(formData);
    console.log("res", res, "errors", errors, "message", message, "formData", formData)

    console.log(errors);
  }
  return (
    <div className="w-auto h-screen py-16 bg-primary-black justify-center text-center">
      <div className="flex py-5 flex-col-2 rounded-2xl justify-around text-black border border-solid border-white">
        <div className="text-black">
          <Image src={dummyImg} height={400} width={400} alt="dummy" />
        </div>

        <div className="w-1/2 p-5 px-5 border border-solid border-slate-300 text-black ">
          <form onSubmit={handleSubmit}>
            <div className="relative pb-3">
              <div className="text-white px-2 md:px-0 flex">Your Name {<FaStarOfLife size={6} className="text-red-600 mt-1 mx-2" />}
              </div>
              <div className=" ">
                <span className="absolute inset-y-0 top-5 right-0 flex items-center pr-4">
                  <AiOutlineUser size={25} className="text-gray-400" />
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="John Carter"
                  onChange={handleChange}
                  required
                  className="peer px-6 py-2 border flex gap-6 border-slate-200  bg-white w-full rounded-[20px] text-slate-700 dark:text-slate-600 hover:border-slate-200 hover:shadow transition duration-150"
                />
              </div>
            </div>

            <div className="relative pb-3">
              <div className="text-white px-2 md:px-0 flex">Your Social Profile {<FaStarOfLife size={6} className="text-red-600 mt-1 mx-2" />}
              </div>
              <div className=" text-gray-500 ">
                <span className="absolute inset-y-0 top-5 right-0 flex items-center pr-4">
                  <MdOutlineEmail size={25} className="text-gray-400" />
                </span>
                <input
                  type="text"
                  id="social"
                  name="social"
                  value={formData.social}
                  placeholder="Share your X profile link"
                  onChange={handleChange}
                  required
                  className="peer px-6 py-2 border flex gap-6 border-slate-200  bg-white w-full rounded-[20px] text-slate-700 dark:text-slate-600 hover:border-slate-200 hover:shadow transition duration-150"
                />
              </div>
            </div>

            <div className="relative pb-3">
              <div className="text-white px-2 md:px-0 flex">Your Mina Wallet Address {<FaStarOfLife size={6} className="text-red-600 mt-1 mx-2" />}
              </div>
              <div className=" text-gray-500 ">
                <span className="absolute inset-y-0 top-5 right-0 flex items-center pr-4">
                  <IoWallet size={25} className="text-gray-400" />
                </span>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  placeholder="Share your Wallet Address"
                  onChange={handleChange}
                  required
                  className="peer px-6 py-2 border flex gap-6 border-slate-200  bg-white w-full rounded-[20px] text-slate-700 dark:text-slate-600 hover:border-slate-200 hover:shadow transition duration-150"
                />
              </div>
            </div>



            {/* <div className=" h-[0px] border my-3 border-neutral-300"></div> */}

            <div className="relative mt-3 rounded-xl ">
              <div className="text-white px-2 md:px-0 flex">Email
              </div>
              <div className=" ">

                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="abc@gmail.com"
                  onChange={handleChange}
                  className="peer px-6 py-2 border flex gap-6 border-slate-200  bg-white w-full rounded-[20px] text-slate-700 dark:text-slate-600 hover:border-slate-200 hover:shadow transition duration-150"
                />

              </div>
            </div>

            <div className="my-5 flex justify-center align-items-center">
              <button type="submit" className="bg-orange-500  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black text-xl font-bold px-5 py-3 rounded-full hover:bg-orange-600">
                LET'S GO
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WhiteList
