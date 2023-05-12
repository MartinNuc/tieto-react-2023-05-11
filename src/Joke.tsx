import axios from 'axios';
import { useEffect, useState } from 'react';

export const Joke = () => {
  const [joke, setJoke] = useState();

  useEffect(() => {
    reloadJoke();
  }, []);

  function reloadJoke() {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(response => {
        setJoke(response.data.value);
      });
  }

  return <div>
    <p>{joke}</p>
    <button onClick={reloadJoke}>Load next</button>
    </div>
}