function getGifByTerm(apikey, q) {
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`
    return getGif(path)
}

async function getGif(path) {
    try {
        const res = await fetch(path)
        const json = await res.json()

        const gifData = {
            url: json.data[0].images.fixed_width.url,
            width: json.data[0].images.fixed_width.width,
            height: json.data[0].images.fixed_width.height,
            title: json.data[0].title
        }
        return gifData
        // console.log(gifData)
    } catch(err) {
        // handle error here
        return err
    }
}

export {
    getGifByTerm
}