export default function Container({ children }) {
    return (
        <div className="px-5 md:px-10 xl:px-0 max-w-screen-lg mx-auto">
            {children}
        </div>
    )
}
