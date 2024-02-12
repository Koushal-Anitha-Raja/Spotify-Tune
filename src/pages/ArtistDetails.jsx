import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistsDetails,
    error,
  } = useGetArtistDetailsQuery({ artistId });
  console.log(artistId);
  console.log(artistData);
  console.log("Is Fetching Artists Details:", isFetchingArtistsDetails);
  console.log("Error:", error);

  if (isFetchingArtistsDetails)
    return <Loader title="Searching artist details" />;

  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold ">Artist Details:</h2>
      </div>
      <RelatedSongs
        data={artistData?.data[0].views["top-songs"]?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};
export default ArtistDetails;
