import InfiniteScroll from "react-infinite-scroll-component";
import Project from "./Project";
import Spinner from "./Spinner";

export default function ProjectList({ projectsData, grid, loadProjects, fetching}) {
    let projectsToDisplay = projectsData.data.map(proj => (
            <div className={grid ? "col-span-6 sm:col-span-4" : "col-span-12"} key={proj.id}>
                <Project img={proj.image} alt={proj.name} />
            </div>
        )
    )

    return (
        <div className="min-h-[200px] flex justify-center items-center">
            {fetching ?
                <Spinner />
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
                            loader={<div className="col-span-12 mt-6"><Spinner /></div>}
                        >
                            {projectsToDisplay}
                        </InfiniteScroll>
                        :
                        <span>No results.</span>
                    }
                </>
            }
        </div>
    )
}
