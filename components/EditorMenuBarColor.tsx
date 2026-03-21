export function EditorMenuBarColor(){
    const isOpen = true;
    return(
        <div className={`float-height bg-zinc-800 rounded-md border border-[#e2dadad6] items-center w-40 h-50 flex flex-col ${isOpen ? 'block' : 'hidden'}`}>
            <div className="mt-2"></div>
        </div>
    )
}