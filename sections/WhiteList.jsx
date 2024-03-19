"use client"
import React, {useState} from 'react'
import dummyImg from "../public/ Decentralise_gaming.jpeg"
import Image from 'next/image';


const toastOptions = {
  position: "bottom-right",
  autoClose: 2000,
  pauseOnHover: true,
  theme: "dark",
  draggable: true,
};

const WhiteList =() => {
    const  [userName, setUserName] = useState("");
    const  [email, setEmail] = useState("");
    const  [country, setCountry] = useState("");
    const  [format, setFormat] = useState("");
    const [message, setMessage] = useState([])
    const [errors, setErrors] = useState()

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("Submitting form...", userName)
        console.log("Submitting form...", email)
        console.log("Submitting form...", country)
        console.log("Submitting form...", format)

        const res = await fetch("/api/whitelist",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body: JSON.stringify({
                setUserName,
                setEmail,
                setCountry,
                setFormat
            })
        });

        const {msg} = await res.json();
        setErrors(msg);
        console.log(errors);
    }
  return (
    <div className="w-auto h-screen py-16 bg-primary-black justify-center text-center">
      <div className="flex py-5 flex-col-2 rounded-2xl justify-around text-black border border-solid border-white">
        <div className="text-black">
          <Image src={dummyImg} height={400} width={400} alt="dummy" />
        </div>

        <div className=" w-1/2 border border-solid border-slate-300">
          <form
            onSubmit={handleSubmit}
            action="#"
            className="py-2 mt-4 flex flex-col gap-4 items-center justify-center p-4"
          >
            <div>
              <label>Username</label>
              <input
                type="text"
                id="userName"
                placeholder="0xVishal.eth"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                value={userName}
              />
            </div>

            <div>
              <label> Email</label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>

            <div>
              <label>Country/Region</label>
              <input
                type="text"
                id="country"
                placeholder="India"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                value={country}
              />
            </div>

            <div>
              <label>Preferred Game Format</label>
              <select
                name="format"
                id="format"
                className="m-4 text-gray-400"
                onChange={(e)=>{setFormat(e.target.value)}}
                value={format}
              >
                <option value="Texas Holdem">Texas Holdem</option>
                <option value="Omaha">Omaha</option>
                <option value="Seven Card Stud">Seven Card Stud</option>
                <option value="Five Card Draw">Five Card Draw</option>
              </select>
            </div>

            <div>
              <button className="w-[300px] rounded-xl border border-solid border-slate-200">
                Whitelist
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WhiteList
