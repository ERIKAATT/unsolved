export default function Menu({ activeTab, onSelect }) {
    const buttons = [
        { label: "Case", id: "case" },
        { label: "Story", id: "story" },
        { label: "Notebook", id: 'notebook' },
        { label: "Statements", id: "statement" },
        { label: "Map", id: "map" }
    ];

    return (
        <div className="relative text-white flex items-end gap-1 h-14">
            {buttons.map((button) => (
                <button
                    key={button.id}
                    onClick={() => onSelect(button.id)}
                    className="cutive-mono-regular uppercase text-white px-3 h-10 hover:h-12 border-x border-t 
            border-white/40 rounded-t-[0.5rem] bg-white/10 text-sm tracking-[0.13em] transition-all duration-200 
            cursor-pointer"
                >
                    {button.label}
                </button>
            ))}
        </div>
    )
}