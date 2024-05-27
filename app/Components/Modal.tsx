'use client'

import React from "react";

interface ModalProps {
  closed: (text: boolean) => void;
  component: React.ReactNode; // Define the prop to accept a component
}

const Modal: React.FC<ModalProps> = ({ closed, component }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="h-screen w-screen fixed" onClick={() => closed(true)}></div>
        <div className="relative w-auto my-6 mx-auto max-w-5xl">
          <div className="backdrop-blur-sm rounded-xl shadow-lg relative flex flex-col w-full bg-secondary outline-none focus:outline-none max-h-[800px] overflow-y-scroll no-scrollbar p-[2vw]">
            <div className="flex justify-end">
              <div
                className="hover:cursor-pointer"
                onClick={() => closed(true)}
              >
                <p className="text-primary text-xl lg:text-3xl">X</p>
              </div>
            </div>
            <div className=" max-w-[70vw] lg:max-w-[50vw] max-h-[40vh] lg:max-h-[40vh]">
              {component}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40"></div>
    </>
  );
};

export default Modal;