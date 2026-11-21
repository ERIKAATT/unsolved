import { motion, motionValue, useTransform } from "motion/react";
import { useRef, useState } from "react";
import Picture from "../../components/Picture/Picture";
import Card from "../../components/Card/Card";
import SuspectCard from "../../components/SuspectCard/SuspectCard";
import wool from "../../assets/ball-of-wool-svgrepo-com.svg";

function DraggableCard({ id, Component, x, y, onSave, constraintsRef, isTop, onPick, onTap }) {
    const wasDragged = useRef(false);

    return (
        <motion.div
            drag
            dragElastic={0}
            dragMomentum={false}
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.1 }}
            style={{ x, y, zIndex: isTop ? 10 : 1 }}
            onPointerDown={() => {
                wasDragged.current = false;
                onPick();
            }}
            onDragStart={() => {
                wasDragged.current = true;
            }}
            onDragEnd={() => onSave(id, x.get(), y.get())}
            onTap={() => {
                if (!wasDragged.current) onTap();
            }}
            className="absolute top-0 left-0 cursor-grab active:cursor-grabbing"
        >
            <Component />
        </motion.div>
    );
}

function YarnLine({ from, to }) {
    const x1 = useTransform(from.x, (v) => v + 100);
    const y1 = useTransform(from.y, (v) => v + 75);
    const x2 = useTransform(to.x, (v) => v + 100);
    const y2 = useTransform(to.y, (v) => v + 75);

    return (
        <>
            <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#3c081b"
                strokeWidth="7"
                strokeLinecap="round"
            />

            <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#5c0701"
                strokeWidth="3"
                strokeLinecap="round"
            />
        </>
    );
}

export default function CaseTab({ positions, onSave, connections, onConnect }) {
    const constraintsRef = useRef(null);
    const [topId, setTopId] = useState(null);
    const [isYarnOn, setYarn] = useState(false);
    const [firstCardId, setFirstCardId] = useState(null);

    // one pair of live x/y values per card, created once and kept
    const values = useRef({});
    function getValues(id) {
        if (!values.current[id]) {
            values.current[id] = {
                x: motionValue(positions[id].x),
                y: motionValue(positions[id].y),
            };
        }
        return values.current[id];
    }

    const items = [
        { id: "picture", Component: Picture },
        { id: "card", Component: Card },
        { id: "suspect", Component: SuspectCard },
    ];

    function selectCard(id) {
        if (!isYarnOn) return;

        if (firstCardId === null) {
            setFirstCardId(id);
        } else if (firstCardId === id) {
            setFirstCardId(null);
        } else {
            onConnect(firstCardId, id);
            setFirstCardId(null);
        }
    }

    return (
        <>
            <div ref={constraintsRef} className="relative h-full w-full">
                {items.map(({ id, Component }) => (
                    <DraggableCard
                        key={id}
                        id={id}
                        Component={Component}
                        x={getValues(id).x}
                        y={getValues(id).y}
                        onSave={onSave}
                        constraintsRef={constraintsRef}
                        isTop={topId === id}
                        onPick={() => setTopId(id)}
                        onTap={() => selectCard(id)}
                    />
                ))}

                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ zIndex: 0 }}
                >
                    {connections.map(({ from, to }) => (
                        <YarnLine
                            key={`${from}-${to}`}
                            from={getValues(from)}
                            to={getValues(to)}
                        />
                    ))}
                </svg>
            </div>

            <div className="absolute top-5 right-5">
            <img
                    src={wool}
                    draggable={false}
                    className={`w-15 h-15 p-1 cursor-pointer ${isYarnOn ? "drop-shadow-[0_0_3px_rgba(255,255,255,0.9)]" : "opacity-70"}`}
                    alt="ball of yarn"
                    onClick={() => {
                        setYarn(!isYarnOn);
                        setFirstCardId(null);
                    }}
                />
            </div>
        </>
    );
}