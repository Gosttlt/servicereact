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
    let response = await fetch(url, { headers })
    let resp = await response.json()
    return resp
}

export const authAPI = {
    getLogin: (data) => fetcher('api/auth/login', 'POST', data),
    getRegister: (data) => fetcher('api/auth/register', 'POST', data),
}


export const appointAPI = {
    getAppoint: async (token) => {
        const data = await fetch('/api/appoint', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const json = await data.json()
        return json
    },
    setAppoint: async (token, form) => {
        const data = await fetch('/api/appoint',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ ...form })
            }
        )
        const json = await data.json()
        return json
    }
}

export const productAPI = {
    getCategory: async (category) => {
        let data = await fetcher(`api/product/${category}`)
        return data.data
    },
    getCurrentModel: (modelKey) => fetcher(`api/modelsv`, 'POST', modelKey)
}