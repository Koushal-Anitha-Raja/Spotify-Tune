import { usestate, useEffect, useState } from "react";
import axios from "axios";
import {
  initializeUseSelector,
  useSelector,
} from "react-redux/es/hooks/useSelector";
import { Error, Loader, SongCard } from "../components";
import { useGetSongByCountryQuery } from "../redux/services/shazamCore";

import React from "react";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongByCountryQuery(country);

  console.log(country);

  useEffect(() => {
    // API KEY :at_Vo3IflOIUcr9GjBgqrfgmvk4rnryU
    axios
      .get(
        "https://geo.ipify.org/api/v2/country?apiKey=at_Vo3IflOIUcr9GjBgqrfgmvk4rnryU"
      )
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);
  return <div>AroundYou</div>;
};
export default AroundYou;
