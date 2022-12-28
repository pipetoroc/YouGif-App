const API_KEY = "pJqYviFUDNfFcku0l5QR8kqFgRDjny45&q";

async function getGifs({ keyword = "morty" } = {}) {
  try {
    const URL_API = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}=${keyword}&limit=10&offset=0&rating=g&lang=en`;

    return fetch(URL_API)
      .then((res) => res.json())
      .then((response) => {
        const { data } = response;
        const gifs = data.map((image) => {
          const { images, title, id } = image;
          const { url } = images.downsized_medium;
          return { title, id, url };
        });
        return gifs;
      });
  } catch (error) {
    console.log(error.message);
  }
}
export { getGifs };
