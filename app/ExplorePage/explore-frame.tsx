'use client'

import Modal from "@/app/Components/Modal";
import { useState } from "react";

interface ExploreFrameProps {
    name: string
    description: string
}

export const ExploreModalFrame = ({name, description}: ExploreFrameProps) => {
    return (
        <div className="flex flex-col">
            <p className="text-primary text-3xl lg:text-4xl pt-[1vh] lg:pt-[2vh] pb-[2vh]">{name}</p>
            <p className="text-primary text-sm lg:text-md lg:pt-[2vh] pb-[2vh] font-thin">{description}</p>
        </div>
    )
}