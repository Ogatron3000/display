import Banner from "../components/Banner";
import Container from "../components/Container";
import {useEffect, useState} from "react";
import ProjectNav from "../components/ProjectNav";
import ProjectList from "../components/ProjectList";

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
        loadProjects(1)
    }, [activeFilter])

    function loadProjects(page) {
        let url = `http://localhost:4000/projects?_page=${page}&_limit=9`
        if (activeFilter !== 'all') {
            url += `&category=${activeFilter}`
        }
        fetch(url)
            .then(response => response.json())
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
                        loadProjects={loadProjects}
                        fetching={fetching}
                    />
                </Container>
            </div>
        </>
    )
}
