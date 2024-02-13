import React from "react";

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start flex-col sm:flex-row sm:items-start sm:justify-center">
    <div
      className={`${
        isPlaying && isActive ? "animate-[spin_2s_linear_infinite]" : ""
      } hidden sm:block h-16 w-16 mr-4`}
    >
      <img
        src={activeSong?.images?.coverart}
        alt="cover art"
        className="rounded-full"
      />
    </div>
    <div className="flex flex-col sm:flex-row sm:flex-shrink-0 sm:max-w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.title ? activeSong?.title : "No active Song"}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}
      </p>
    </div>
  </div>
);

export default Track;
