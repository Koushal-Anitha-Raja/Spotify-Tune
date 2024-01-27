import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import React, { useEffect } from "react";

const Discover = () => {
  const { data, isFetching, isError, error } = useGetTopChartsQuery();

  // const fetchData = async () => {
  //   const url = "https://shazam-core.p.rapidapi.com/v1/charts/world";
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "fabf70dad5mshbc11a9b5a369599p18acdfjsne631d0041f2e",
  //       "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  //     },
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // if (isFetching) return <Loader title="Loading songs" />;

  // if (error) return <Error />;

  const genreTitle = "Pop";

  if (isFetching) {
    return <div>Loading...</div>;
  }

  console.log(data);
  console.log(isFetching);
  console.log(isError);
  console.log(error);

  return (
    <div className="flex flex-col w-full justify-between items-center mt-4 mb-10">
      <h2 className="font-bold text-3xl text-white mb-2">
        Discover {genreTitle}
      </h2>

      <select
        onChange={() => {}}
        value=""
        className="bg-black text-grey-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
      >
        {genres.map((genre) => (
          <option key={genre.value} value={genre.value}>
            {genre.title}
          </option>
        ))}
      </select>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
          <SongCard key={song.key} song={song} i={i}></SongCard>
        ))}
      </div>
    </div>
  );
};

export default Discover;
