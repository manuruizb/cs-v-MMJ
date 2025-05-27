import { useEffect, useState } from "react";
import {fetchHero} from "../api/superHeroApi"

export default function useFilteredHeroes(id) {
  const [hero, setHero] = useState({});

  const loadHeroInfo = async () => {
    try {
      const data = await fetchHero(id);
      setHero(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadHeroInfo();
  }, []);

  return {hero}
}
