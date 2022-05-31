export const getGifs = async (category) => {
    const GIPHY_URL = "https://api.giphy.com/v1/gifs/search";
    const API_KEY = "api_key=cjGxijHOkk0hgk5tkaC65kR19Z7ia1GV";
    const FINAL_URL = `${GIPHY_URL}?q=${encodeURI(category)}&limit=10&${API_KEY}`;
    const resp = await fetch(FINAL_URL);
    const {data} = await resp.json();
    const gifs = data.map( (img) =>{
        return {
            id: img.id,
            url: img.images.downsized_medium.url,
            title: img.title
        }
    });
    return gifs;
};