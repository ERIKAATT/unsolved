import PaperClip from "../PaperClip/PaperClip";
import { Pin } from "../Pin/Pin";
import "./Picture.css";
import { useState } from "react";

export default function Pictures() {
    const [title, setTitle] = useState("Test");
    const [description, setDescription] = useState("This is just a test for the description");

    return (
        <div className="relative border-6 border-solid w-60 h-40 border-[#e0dbd5] shadow-xl/20 -rotate-5">
            <img
                draggable={false}
                className="w-full h-full object-cover"
                src="/images/test1.jpg"
                alt="crime scene"
            />

            <div className="absolute top-22 left-2 w-40">
                <div className="absolute -top-2 left-1 w-15 h-4 bg-[#47181f] border border-[#684a4a] shadow-xl/20 flex items-center justify-center text-center">
                    <p className="bebas-neue-regular text-xs text-[#f4ecd8] opacity-40">
                        Forensics
                    </p>
                </div>

                <div className="paper p-2 shadow-xl/30 flex flex-col items-center justify-center text-center">
                    <p className="bebas-neue-regular tracking-[0.15rem]">
                        {title}
                    </p>
                    <p className="cutive-mono-regular text-xs">{description}</p>
                </div>
            </div>

            <div className="absolute -top-4.5 left-25 w-8 h-8 rotate-30">
                <Pin />
            </div>

            <div className="absolute top-18 w-7 h-7 -rotate-90">
                <PaperClip />
            </div>
        </div>
    );
}