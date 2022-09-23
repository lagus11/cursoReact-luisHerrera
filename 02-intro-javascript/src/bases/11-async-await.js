

const getImagen = async () => {


  try {
    const apiKey = "13q1o7pGxdQRCIFMA73GEWoVG7Uajtr5";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
      const img = document.createElement("img");
      img.src = url;
  
      document.body.append( img );
  } catch(error){
    //manejo del error
    console.log(error);
  }

}

getImagen();

/*
const apiKey = "13q1o7pGxdQRCIFMA73GEWoVG7Uajtr5";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;

    document.body.append( img );
  })
  .catch(console.warn);

  */
