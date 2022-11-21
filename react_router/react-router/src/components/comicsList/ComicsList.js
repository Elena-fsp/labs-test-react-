import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

function ComicsList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://gateway.marvel.com:443/v1/public/comics?limit=5&apikey=66f5faa27e11090543b0cd2fe0603d1b")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data.results);
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
            <Link to={`/${item.id}`}> {item.title} </Link>
          </li>
        ))}
      </ul>
    );
  }
}


export default ComicsList;

