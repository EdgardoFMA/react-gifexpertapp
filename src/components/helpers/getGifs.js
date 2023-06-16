


export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category) }&limit=10&t=1&api_key=vHtb07TUeN24Xo8bs9lyvaBV4F4z4Ep5`;
    const response = await fetch( url );
    const {data} = await response.json();
    
    

    const gifs = data.map (img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })

    return gifs;
 
  }

