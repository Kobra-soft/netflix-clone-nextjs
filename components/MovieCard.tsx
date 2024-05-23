import React from "react";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <div
      className="bg-zinc-900 rounded 
        h-[8.5vw] sm:h-[8.5vw] md:h-[8.5vw] lg:h-[8.5vw] xl:h-[8.5vw]
        w-[15.25vw] sm-[15.25vw] md:w-[15.25vw] lg:w-[15.25vw] xl:w-[15.25vw]
        "
    >
      <img
        className="w-full h-full rounded"
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
    </div>
  );
};

export default MovieCard;
