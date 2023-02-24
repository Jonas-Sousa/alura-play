async function videoList () {
    const getResponseApi = await fetch("http://localhost:3000/videos")
    const turnedIntoObject = await getResponseApi.json();

    return turnedIntoObject;
};


export const connectApi = {
    videoList
    
}