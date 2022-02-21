// Were making a custom hook here for example, isn't actually neccassry for this functionality.
import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  // Custom hooks almost always make use of preexisting hooks like useState.
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");
  // Status here inst really neccessary, but is good practice, to keep track of the state of the hook, usually unloaded, loading, loaded.

  useEffect(() => {
    if (!animal) {
      // if user hasnt selected animal, then breed list is empty
      setBreedList([]);
    } else if (localCache[animal]) {
      //if user selects an animal they have previously selected, then the breedList will be loaded from cache var, instead of api call
      setBreedList(localCache[animal]);
    } else {
      // else make the api call
      requestBreedList();
    }

    async function requestBreedList() {
      //clears breedlist first
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      //set the local cache key for this animal to the api response or nothing if errored
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);
  // this useEffect will be triggered only when the state of animal changes, thanks to the 2nd argument [animal]

  //We're returning two things back to the consumer of this custom hook: a list of breeds (including an empty list when it doesn't have anything in it) and an enumerated type of the status of the hook: unloaded, loading, or loaded.
  return [breedList, status];
}
