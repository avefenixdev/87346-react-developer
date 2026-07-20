
const httpClient =  async (url, options = {}) => {
    const res = await fetch(url, options)

    if (!res.ok) {
        throw new Error(`ERROR: HTTP ${res.status}`)
    }

    return res.json()
}

export default httpClient