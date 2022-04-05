const BASE_URL = `http://localhost:4000/projects`

export function getProjects(page = 1, filter = null) {
    let url = `${BASE_URL}?_page=${page}&_limit=9`
    if (filter && filter !== 'all') {
        url += `&category=${filter}`
    }
    return fetch(url)
        .then(response => response.json())
        .then(projects => projects)
}
