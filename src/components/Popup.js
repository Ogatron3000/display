import ReactDom from "react-dom"

export default function Popup({isOpen, setIsOpen}) {
    if (!isOpen) return null

    function close() {
        setIsOpen(false)
        document.body.style.overflow = 'unset';
    }

    return ReactDom.createPortal(
        <div id="portal-modal" className="fixed h-screen w-screen left-0 top-0 overflow-hidden z-20">
            <div className="w-full h-full bg-neutral-600 opacity-50" onClick={close}/>
            <iframe
                className="absolute bottom-0 top-0 left-0 right-0 m-auto sm:w-[600px] sm:h-[300px] border-2"
                src={`https://www.youtube.com/embed/P-DCgzFbo_o`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
        , document.body)
}
