import { useState } from "react";
export default function StatementTab() {
    const [name, setName] = useState("John Smith");
    const [age, setAge] = useState("34");
    const [occupation, setOccupation] = useState("Gardener");
    const [relationship, setRelationship] = useState("Garderner of the victim. Worked for him for 6 years.");
    const [alibi, setAlibi] = useState("Claims he was attending to the garden between 4PM and 8PM");
    const [statement, setStatement] = useState("I was in my garden that entire afternoon, preparing the soil and planting a new batch of tomatoes. It's been a particularly busy season, and I wanted to get everything planted before the weather turned. I remember it was getting close to 7 PM when I was watering the last few rows. Luisa actually stopped by around that time to bring me some gardening supplies. We chatted for a little while before she left. She can confirm I was there. I didn't leave the garden until much later, so whatever happened, I had absolutely nothing to do with it!");

    return (
        <div className="absolute inset-0 p-20 pb-20">
            <div className="h-full overflow-auto text-black special-elite-regular">
                <div className="h-80 w-full paper p-5 mb-5 relative">
                    <img
                        src="/images/splatter.png"
                        draggable={false}
                        className="scale-x-[-1] pointer-events-none h-60 absolute top-25 right-0 opacity-30"
                        alt=""
                    />

                    <img
                        src="/images/splatter2.png"
                        draggable={false}
                        className="scale-x-[-1] pointer-events-none h-60 absolute top-10 left-0 opacity-40"
                        alt=""
                    />
                    <div className="pb-2">
                        <div class="flex items-center gap-4">
                            <img
                                src="/images/suspect1.png"
                                draggable={false}
                                className="scale-x-[-1] pointer-events-none h-40 border border-3 border-white"
                                alt=""
                            />
                            <div>
                                <h3 class="text-2xl font-bold">{name}</h3>
                                <p><span className="font-bold">AGE:</span> <span>{age}</span></p>
                                <p><span className="font-bold">OCCUPATION:</span> <span>{occupation}</span></p>
                                <p><span className="font-bold">RELATIONSHIP TO VICTIM:</span> <span></span>{relationship}</p>
                                <p><span className="font-bold">ALIBI: </span><span></span>{alibi}</p>
                            </div>
                        </div>

                    </div>

                    <p><span className="font-bold">STATEMENT:</span> <span></span>{statement}</p>

                </div>

                <div className="h-80 w-full paper p-5 mb-5 relative">
                    <img
                        src="/images/splatter.png"
                        draggable={false}
                        className="scale-x-[-1] pointer-events-none h-60 absolute top-25 right-0 opacity-30"
                        alt=""
                    />

                    <img
                        src="/images/splatter2.png"
                        draggable={false}
                        className="scale-x-[-1] pointer-events-none h-60 absolute top-10 left-0 opacity-40"
                        alt=""
                    />
                    <div className="pb-2">
                        <div class="flex items-center gap-4">
                            <img
                                src="/images/suspect1.png"
                                draggable={false}
                                className="scale-x-[-1] pointer-events-none h-40 border border-3 border-white"
                                alt=""
                            />
                            <div>
                                <h3 class="text-2xl font-bold">{name}</h3>
                                <p><span className="font-bold">AGE:</span> <span>{age}</span></p>
                                <p><span className="font-bold">OCCUPATION:</span> <span>{occupation}</span></p>
                                <p><span className="font-bold">RELATIONSHIP TO VICTIM:</span> <span></span>{relationship}</p>
                                <p><span className="font-bold">ALIBI: </span><span></span>{alibi}</p>
                            </div>
                        </div>

                    </div>

                    <p><span className="font-bold">STATEMENT:</span> <span></span>{statement}</p>

                </div>

                <div className="h-80 w-full paper p-5 mb-5 relative">
                    <img
                        src="/images/splatter.png"
                        draggable={false}
                        className="scale-x-[-1] pointer-events-none h-60 absolute top-25 right-0 opacity-30"
                        alt=""
                    />

                    <img
                        src="/images/splatter2.png"
                        draggable={false}
                        className="scale-x-[-1] pointer-events-none h-60 absolute top-10 left-0 opacity-40"
                        alt=""
                    />
                    <div className="pb-2">
                        <div class="flex items-center gap-4">
                            <img
                                src="/images/suspect1.png"
                                draggable={false}
                                className="scale-x-[-1] pointer-events-none h-40 border border-3 border-white"
                                alt=""
                            />
                            <div>
                                <h3 class="text-2xl font-bold">{name}</h3>
                                <p><span className="font-bold">AGE:</span> <span>{age}</span></p>
                                <p><span className="font-bold">OCCUPATION:</span> <span>{occupation}</span></p>
                                <p><span className="font-bold">RELATIONSHIP TO VICTIM:</span> <span></span>{relationship}</p>
                                <p><span className="font-bold">ALIBI: </span><span></span>{alibi}</p>
                            </div>
                        </div>

                    </div>

                    <p><span className="font-bold">STATEMENT:</span> <span></span>{statement}</p>

                </div>

                <div className="h-80 w-full paper p-5 mb-5 relative">
                    <img
                        src="/images/splatter.png"
                        draggable={false}
                        className="scale-x-[-1] pointer-events-none h-60 absolute top-25 right-0 opacity-30"
                        alt=""
                    />

                    <img
                        src="/images/splatter2.png"
                        draggable={false}
                        className="scale-x-[-1] pointer-events-none h-60 absolute top-10 left-0 opacity-40"
                        alt=""
                    />
                    <div className="pb-2">
                        <div class="flex items-center gap-4">
                            <img
                                src="/images/suspect1.png"
                                draggable={false}
                                className="scale-x-[-1] pointer-events-none h-40 border border-3 border-white"
                                alt=""
                            />
                            <div>
                                <h3 class="text-2xl font-bold">{name}</h3>
                                <p><span className="font-bold">AGE:</span> <span>{age}</span></p>
                                <p><span className="font-bold">OCCUPATION:</span> <span>{occupation}</span></p>
                                <p><span className="font-bold">RELATIONSHIP TO VICTIM:</span> <span></span>{relationship}</p>
                                <p><span className="font-bold">ALIBI: </span><span></span>{alibi}</p>
                            </div>
                        </div>

                    </div>

                    <p><span className="font-bold">STATEMENT:</span> <span></span>{statement}</p>

                </div>

                <div className="h-80 w-full paper p-5 mb-5 relative">
                    <img
                        src="/images/splatter.png"
                        draggable={false}
                        className="scale-x-[-1] pointer-events-none h-60 absolute top-25 right-0 opacity-30"
                        alt=""
                    />

                    <img
                        src="/images/splatter2.png"
                        draggable={false}
                        className="scale-x-[-1] pointer-events-none h-60 absolute top-10 left-0 opacity-40"
                        alt=""
                    />
                    <div className="pb-2">
                        <div class="flex items-center gap-4">
                            <img
                                src="/images/suspect1.png"
                                draggable={false}
                                className="scale-x-[-1] pointer-events-none h-40 border border-3 border-white"
                                alt=""
                            />
                            <div>
                                <h3 class="text-2xl font-bold">{name}</h3>
                                <p><span className="font-bold">AGE:</span> <span>{age}</span></p>
                                <p><span className="font-bold">OCCUPATION:</span> <span>{occupation}</span></p>
                                <p><span className="font-bold">RELATIONSHIP TO VICTIM:</span> <span></span>{relationship}</p>
                                <p><span className="font-bold">ALIBI: </span><span></span>{alibi}</p>
                            </div>
                        </div>

                    </div>

                    <p><span className="font-bold">STATEMENT:</span> <span></span>{statement}</p>

                </div>
            </div>
        </div>
    )
}