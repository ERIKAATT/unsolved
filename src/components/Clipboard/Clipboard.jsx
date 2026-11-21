import "./ClipBoard.css";
export default function ClipBoard() {
    return (
        <div className="relative w-70 rotate-10">
            <img
                draggable={false}
                className="w-full h-auto object-contain"
                src="/images/clipboard.png"
                alt="Final Clipboard"
            />

            <div className="absolute top-15 left-1/2 -translate-x-1/2 w-[65%] flex flex-col gap-3 special-elite-regular uppercase text-black/70">
                <p className="pb-2 border-b border-black/40 text-xl tracking-[0.10em] text-center">
                    Final Report
                </p>

                <div className="grid grid-cols-2 gap-y-1 text-xs pb-2 border-b border-black/40">
                    <p>case</p>
                    <p>placeholder</p>
                    <p>Title</p>
                    <p>placeholder</p>
                    <p>Subject</p>
                    <p>placeholder</p>
                </div>

                <div className="grid grid-cols-2 gap-y-1 text-xs pb-2 border-b border-black/40">
                    <p>Final Suspect</p>
                    <p>placeholder</p>
                    <p>Motive</p>
                    <p>placeholder</p>
                    <p>Key Evidence</p>
                    <p>placeholder</p>
                </div>

                <div className="text-xs pb-1 border-b border-black/40">
                    <p className="pb-1">Select up to 2 evidences</p>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> placeholder
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> placeholder
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> placeholder
                    </label>
                </div>

                <button className="border border-[#921e20] px-2 py-1 self-center uppercase text-lg linen text-white cursor-pointer">
                    close case
                </button>
            </div>
        </div>
    );
}