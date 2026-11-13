import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

const Admission = () => {
  return (
    <div className="group min-h-[400px] my-20 flex justify-between relative">
      <div className="w-[480px] text-8xl font-poppins text-black">
        <span className="opacity-40 transition-all duration-150 hover:opacity-100 cursor-pointer">
          Ready{" "}
        </span>
        <span className="opacity-40 transition-all duration-150 hover:opacity-100 cursor-pointer">
          to{" "}
        </span>
        <span className="opacity-40 transition-all duration-150 hover:opacity-100 cursor-pointer">
          Move{" "}
        </span>
        <span className="opacity-40 transition-all duration-150 hover:opacity-100 cursor-pointer">
          into{" "}
        </span>
        <span className="opacity-40 transition-all duration-150 hover:opacity-100 cursor-pointer">
          the
        </span>
        <span className="opacity-40 transition-all duration-150 hover:opacity-100 cursor-pointer">
          {" "}
          Spotlight?
        </span>
      </div>
      <div className="w-[230px] h-full absolute left-1/3 z-10 transition-all duration-500 group-hover:opacity-0 group-hover:-z-10">
        <img
          className="h-full w-full object-cover"
          src="./image/four.jpg"
          alt=""
        />
      </div>
      <div className="opacity-0 transition-all duration-300 delay-300 group-hover:opacity-100 group-hover:z-20 flex flex-col justify-evenly  ">
        <div className="w-[200px] h-[250px]">
          <img
            className="w-full h-full object-scale-down rotate-[-30deg] opacity-10"
            src="./icons/arrow.svg"
            alt=""
          />
        </div>
        <button className="h-[60px] w-max px-5 py-1.5 bg-gray-600 font-poppins text-[19px] font-medium cursor-pointer text-white hover:bg-gray-500">
          Book an Assessment
        </button>
      </div>
      <div className="w-[230px] h-full absolute right-1/3 transition-all duration-500 group-hover:opacity-0 group-hover:-z-10">
        <img
          className="h-full w-full object-cover"
          src="./image/two.jpg"
          alt=""
        />
      </div>
      <div className="w-[480px] text-8xl font-poppins flex flex-col justify-between">
        <div className="flex">
            <h1 className="text-8xl font-poppins opacity-40 mb-4">FAQs</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14 opacity-20 animate-bounce">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
        </div>

        <div className="h-[280px] overflow-y-scroll no-scrollbar">
            
        <Disclosure>
          <div className=" flex flex-col pr-7">
            <div className="flex justify-between text-[16px] h-max py-2 items-center">
                <span className="leading-relaxed">Do I need prior modeling experience to join the academy?</span>
                <DisclosureButton className="w-[35px] h-[35px] text-2xl">+</DisclosureButton>
            </div>
          <DisclosurePanel className="text-gray-500 text-[16px] border-2 border-gray-200 content-center px-2 py-4 leading-relaxed h-max ">
            Not at all. Our programs are designed for both beginners and aspiring professionals — we train you from the basics up.
          </DisclosurePanel>
          </div>
        </Disclosure>

        <Disclosure>
          <div className=" flex flex-col pr-7">
            <div className="flex justify-between text-[16px] h-max py-2 items-center">
                <span className="leading-relaxed">What age group do you accept for enrollment?</span>
                <DisclosureButton className="w-[35px] h-[35px] text-2xl">+</DisclosureButton>
            </div>
          <DisclosurePanel className="text-gray-500 text-[16px] border-2 border-gray-200 content-center px-2 py-4 leading-relaxed h-max ">
            We welcome students from 14 – 30 years. Special programs are also available for younger aspiring models.
          </DisclosurePanel>
          </div>
        </Disclosure>

        <Disclosure>
          <div className=" flex flex-col pr-7">
            <div className="flex justify-between text-[16px] h-max py-2 items-center">
                <span className="leading-relaxed">Do you help students get modeling jobs or agency representation?</span>
                <DisclosureButton className="w-[35px] h-[35px] text-2xl">+</DisclosureButton>
            </div>
          <DisclosurePanel className="text-gray-500 text-[16px] border-2 border-gray-200 content-center px-2 py-4 leading-relaxed h-max ">
            Yes. We connect our top-performing students with reputable agencies and casting opportunities through our talent network.
          </DisclosurePanel>
          </div>
        </Disclosure>


        <Disclosure>
          <div className=" flex flex-col pr-7">
            <div className="flex justify-between text-[16px] h-max py-2 items-center">
                <span className="leading-relaxed">How long does the training program last?</span>
                <DisclosureButton className="w-[35px] h-[35px] text-2xl">+</DisclosureButton>
            </div>
          <DisclosurePanel className="text-gray-500 text-[16px] border-2 border-gray-200 content-center px-2 py-4 leading-relaxed h-max ">
            Depending on the course you choose, training can range from a few weeks to several months. Each program is designed to fit different learning goals.
          </DisclosurePanel>
          </div>
        </Disclosure>

        <Disclosure>
          <div className=" flex flex-col pr-7">
            <div className="flex justify-between text-[16px] h-max py-2 items-center">
                <span className="leading-relaxed">What should I bring or wear to classes?</span>
                <DisclosureButton className="w-[35px] h-[35px] text-2xl">+</DisclosureButton>
            </div>
          <DisclosurePanel className="text-gray-500 text-[16px] border-2 border-gray-200 content-center px-2 py-4 leading-relaxed h-max ">
            Come dressed comfortably and confidently! We recommend fitted black outfits, heels (for females), and minimal makeup for runway or camera sessions.
          </DisclosurePanel>
          </div>
        </Disclosure>
        </div>
      </div>
    </div>

    
  );
};

export default Admission;
