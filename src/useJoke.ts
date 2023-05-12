import axios from "axios";
import { useEffect, useState } from "react";

export const useJoke = () => {
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

  return {
    joke: joke,
    loadNext: reloadJoke
  }
}