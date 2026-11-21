import { useState } from "react";
import ClipBoard from "../../components/Clipboard/Clipboard";
import Menu from "../../components/Menu/Menu";
import CaseTab from "../CaseTab/CaseTab";
import StoryTab from "../StoryTab/StoryTab";
import wool from "../../assets/ball-of-wool-svgrepo-com.svg";

export default function CaseBoard() {
    const [activeTab, setActiveTab] = useState("case");

    const [positions, setPositions] = useState({
        picture: { x: 0, y: 0 },
        card: { x: 0, y: 0 },
        suspect: { x: 0, y: 0 },
    });

    const [connections, setConnections] = useState([]);
    const addConnection = (from, to) => {
        setConnections((prev) => {
            const exists = prev.some(
                (c) =>
                    (c.from === from && c.to === to) ||
                    (c.from === to && c.to === from)
            );
            if (exists) return prev;
            return [...prev, { from, to }];
        });
    };

    const savePosition = (id, x, y) => {
        setPositions((prev) => ({ ...prev, [id]: { x, y } }));
    };

    return (
        <div className="fixed inset-0 overflow-hidden select-none">
            <img
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                src="/images/blackBoard.jpg"
                alt="Investigation board"
            />
            <div className="absolute inset-0 bg-[#6b4a2f]/40 pointer-events-none" />

            <div className="absolute top-5 left-5 z-4">
                <button className="cursor-pointer cutive-mono-regular uppercase text-white 
                border border-white/40 px-3 py-2 shadow-lg bg-black/30 text-sm">
                    Menu
                </button>
            </div>

            <div className="h-full p-10 z-1">
                {activeTab === "case" && <CaseTab positions={positions} onSave={savePosition} connections={connections} 
                onConnect={addConnection} />}
            </div>

            <div className="h-full p-10 z-1">
                {activeTab === "story" && <StoryTab />}
            </div>

            <div className="absolute -bottom-5 right-5">
                <ClipBoard />
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-3">
                <Menu activeTab={activeTab} onSelect={setActiveTab} />
            </div>
        </div>
    );
}