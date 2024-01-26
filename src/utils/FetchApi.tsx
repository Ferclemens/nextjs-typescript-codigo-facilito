
export default async function FetchApiNASA(queryParams?: string) {
    const endPoint = `${process.env.BASE_URL}?api_key=${process.env.API_KEY_NASA}${queryParams?.length ? queryParams : ''}`
    //console.log('EndPoint to fetch -> ',endPoint);
    try {
        const response = await fetch(endPoint)
        const data = await response.json()   

        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }
}