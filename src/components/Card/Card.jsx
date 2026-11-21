import { useState } from "react";

export default function Card() {
    const [title, setTitle] = useState("Title For Card");
    const [text, setText] = useState("This is just a bunch of placeholders for the card to see if it works correctly!!");

    return (
        <div className="relative w-50 shadow-xl/20 rotate-5 paper p-5">
            <img
                src="/images/tape1.png"
                draggable={false}
                className="absolute -top-3 right-20 rotate-12 scale-x-[-1] w-14 pointer-events-none z-10 opacity-90"
                alt=""
            />
            <p className="bebas-neue-regular tracking-[0.15rem]">
                {title}
            </p>
            <p className="cutive-mono-regular text-xs">
                {text}
            </p>
        </div>
    );
}