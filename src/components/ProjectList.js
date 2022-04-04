import InfiniteScroll from "react-infinite-scroll-component";
import Project from "./Project";

export default function ProjectList({ projectsData, grid, loadProjects, fetching}) {
    let projectsToDisplay = projectsData.data.map(proj => (
            <div className={grid ? "col-span-6 sm:col-span-4" : "col-span-12"} key={proj.id}>
                <Project img={proj.image} />
            </div>
        )
    )

    return (
        <div className="min-h-[200px] flex justify-center items-center">
            {fetching ?
                <svg className="animate-spin h-12 w-12 text-green-500" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                :
                <>
                    {projectsToDisplay.length > 0 ?
                        <InfiniteScroll
                            className="grid grid-cols-12 gap-5 w-full"
                            style={{overflow: "hidden"}}
                            dataLength={projectsData.data.length}
                            next={() => loadProjects(projectsData.page + 1)}
                            hasMore={projectsData.hasMore}
                            scrollThreshold={1}
                            loader={<div className="col-span-12 mx-auto my-6">
                                <svg className="animate-spin h-12 w-12 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                </svg>
                            </div>}
                        >
                            {projectsToDisplay}
                        </InfiniteScroll>
                        :
                        <div className="col-span-12">
                            No results.
                        </div>
                    }
                </>
            }
        </div>
    )
}
