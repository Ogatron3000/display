import Banner from "../components/Banner";
import Container from "../components/Container";
import {useEffect, useState} from "react";
import ProjectNav from "../components/ProjectNav";
import ProjectList from "../components/ProjectList";
import {Helmet} from "react-helmet";
import {getProjects} from "../services/projects";

export default function Work() {
    const [activeFilter, setActiveFilter] = useState('all')
    const [grid, setGrid] = useState(true)
    const [fetching, setFetching] = useState(true)
    const [projectsData, setProjectsData] = useState({
        page: null,
        hasMore: true,
        data: []
    })

    useEffect(() => {
        setFetching(true)
        loadProjects(1, activeFilter)
    }, [activeFilter])

    function loadProjects(page , filter) {
        getProjects(page, filter)
            .then(projects => {
                setProjectsData(prevState => ({
                    page: prevState.page + 1,
                    hasMore: projects.length === 9,
                    data: prevState.data.concat(projects)
                }))
                setFetching(false)
            })
    }

    function onCategoryClick(filter) {
        setActiveFilter(filter)
        setProjectsData({
            page: null,
            hasMore: true,
            data: [],
        })
    }

    return (
        <>
            <Helmet>
                <title>Display - Work</title>
                <meta name="description" content="Display portfolio." />
                <link rel="canonical" href="http://localhost:3000/work" />
            </Helmet>
            <Banner content="Check out what I can do" />
            <div className="py-12">
                <Container>
                    <ProjectNav
                        grid={grid}
                        setGrid={setGrid}
                        handleClick={onCategoryClick}
                        activeFilter={activeFilter}
                    />
                    <ProjectList
                        grid={grid}
                        projectsData={projectsData}
                        loadProjects={() => loadProjects(projectsData.page + 1, activeFilter)}
                        fetching={fetching}
                    />
                </Container>
            </div>
        </>
    )
}
