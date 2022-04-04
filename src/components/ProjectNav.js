export default function ProjectNav({ grid, setGrid, handleClick, activeFilter }) {
    let filters = ['all', 'print', 'photography', 'web', 'applications']
    let filtersToDisplay = filters.map(filter => {
        return (
            <li
                key={filter}
                className="font-title lowercase text-lg uppercase after:content-['\00a0\00a0/\00a0'] last:after:content-none"
            >
                <span
                    className={"cursor-pointer " + (filter === activeFilter ? "text-green-500 pointer-events-none" : null)}
                    onClick={() => handleClick(filter)}
                >
                    {filter[0].toUpperCase() + filter.substring(1)}
                </span>
            </li>
        )
    })

    return (
        <div className="flex gap-6 justify-between mb-12">
            <ul className="flex flex-wrap">
                {filtersToDisplay}
            </ul>
            <div className="flex self-start my-2">
                <button onClick={() => setGrid(true)} className="mr-2">
                    <svg className={grid ? "fill-green-500" : null} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="15" height="15" viewBox="0 0 15 15">
                        <path d="M8.967,15.000 L8.967,8.905 L15.000,8.905 L15.000,15.000 L8.967,15.000 ZM8.946,0.000 L15.000,0.000 L15.000,6.012 L8.946,6.012 L8.946,0.000 ZM0.000,0.000 L6.033,0.000 L6.033,5.929 L0.000,5.929 L0.000,0.000 ZM6.012,15.000 L0.000,15.000 L0.000,8.905 L6.012,8.905 L6.012,15.000 Z" />
                    </svg>
                </button>
                <button onClick={() => setGrid(false)}>
                    <svg className={!grid ? "fill-green-500" : null} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="15" height="15.031" viewBox="0 0 15 15.031">
                        <path d="M0.000,15.031 L0.000,12.031 L15.000,12.031 L15.000,15.031 L0.000,15.031 ZM0.000,6.000 L15.000,6.000 L15.000,9.031 L0.000,9.031 L0.000,6.000 ZM0.000,-0.000 L15.000,-0.000 L15.000,3.031 L0.000,3.031 L0.000,-0.000 Z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
