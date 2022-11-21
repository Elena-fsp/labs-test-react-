import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const SepareteComic = () => {

  const { ComicId } = useParams();
  const [comic, setComic] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    fetch(`https://gateway.marvel.com:443/v1/public/comics/${ComicId}?apikey=66f5faa27e11090543b0cd2fe0603d1b`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setComic(result.data.results[0]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [ComicId])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <>
            <div>
                <h2>{comic.title}</h2>
                <p>Description: {comic.description}</p>
                <p>Page count: {comic.pageCount}</p>
            </div>
        <Link to="/">Back to all comics</Link>
      </>
    );
  }



}

export default SepareteComic;