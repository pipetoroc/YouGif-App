const URL_API =
  "https://api.giphy.com/v1/gifs/search?api_key=pJqYviFUDNfFcku0l5QR8kqFgRDjny45&q=love&limit=10&offset=0&rating=g&lang=en";

async function getGifts() {
  try {
    let response = await fetch(URL_API);
    let data = await response.json();
    console.log("data", data);
    const gifs = data.data.map((image) => image.images.downsized_medium.url);
    console.log("gifts", gifs);
    return gifs;
  } catch (error) {
    console.log(error.message);
  }
}

export { getGifts };
