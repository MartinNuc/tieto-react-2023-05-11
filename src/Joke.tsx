import { useJoke } from './useJoke';

export const Joke = () => {
  const {joke, loadNext} = useJoke();

  return <div>
    <p>{joke}</p>
    <button onClick={loadNext}>Load next</button>
    </div>
}