import { useState } from "react";
import { useEffect } from "react";

function ComicsList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=66f5faa27e11090543b0cd2fe0603d1b")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data.results);
          console.log(result.data.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <a href="/"> {item.name} </a>
          </li>
        ))}
      </ul>
    );
  }
}


export default ComicsList;

