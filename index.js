function getGifByTerm(apikey, q) {
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`
    return getGif(path)
}

async function getGif(path) {
    try {
        const res = await fetch(path)
        const data = await res.json()

        const gifData = {
            url: data.images.fixed_width.url,
            width: data.images.fixed_width.width,
            height: data.images.fixed_width.height,
            title: data.title,
            resultsHTML: `<img src="${url}" width="${width}" height="${height}" alt="${title}">`
        }
        return gifData
    } catch(err) {
        // handle error here
        return err
    }
}

export {
    getGifByTerm
}