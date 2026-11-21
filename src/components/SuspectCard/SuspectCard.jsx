import Card from "../Card/Card";
import PaperClip from "../PaperClip/PaperClip";

export default function () {
    return (
        <div className="relative w-50 p-5">
            <Card />

            <img
                src="/images/suspect1.png"
                draggable={false}
                className="absolute top-2 -right-5 rotate-10 scale-x-[-1] pointer-events-none h-15 border border-3 border-white"
                alt=""
            />

            <div className="absolute top-2 left-39 w-8 h-8 -rotate-79">
                <PaperClip />
            </div>

        </div>
    );
}