import { useEffect, useState } from "react";

const ApiCall = () => {

  const [characters, setCharacters] = useState([])


  useEffect(() => {

    const getCharacters = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      console.log('mi respuesta sin formatear', res)
      const resFormatted = await res.json()
      console.log('mi respuesta formateada', resFormatted)
      setCharacters(resFormatted.results);
    }

    getCharacters();

  }, [])

  return (<>
    {
      characters.map((c) => (
        <>
          <img src={c.image} alt="imagen" />
          {
            c.episode.map((e, index) => (
              <a key={index}>{e}</a>
            )

            )
          }

        </>
      ))
    }
  </>);
}

export default ApiCall;