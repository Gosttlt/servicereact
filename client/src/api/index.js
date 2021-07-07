const fetcher = async (url, method = 'GET', data, headers = { 'Content-Type': 'application/json' }) => {
    if (method === 'POST') {
        let response = await fetch(url, {
            method,
            headers,
            body: JSON.stringify(data)
        })
        let resp = await response.json()
        return resp
    }
    let response = await fetch(url)
    let resp = await response.json()
    return resp
}

export const authAPI = {
    getLogin: (data) => fetcher('api/auth/login', 'POST', data),
    getRegister: (data) => fetcher('api/auth/register', 'POST', data),
}

export const productAPI = {
    getCompany: () => fetcher('api/product/company'),
    getDevice: () => fetcher('api/product/device'),
    getModel: () => fetcher('api/product/models'),
    getCurrentModel: (modelKey) => fetcher(`api/modelsv`, 'POST', modelKey)
}