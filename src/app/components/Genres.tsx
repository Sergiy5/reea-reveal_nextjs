import React from "react";
import Image from "next/image";
import { GenreLinkIcon } from "./GenreLinkIcon";

export const Genres: React.FC = (): React.JSX.Element => {
  return (
    <div className={`relative flex flex-col items-center gap-12`}>
      <Image
        src={"/icons/genres_bg-ellips.svg"}
        alt="Background ellips"
        width={1440}
        height={720}
        priority
        className={`absolute z-0 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4
           w-full h-auto blur-hero xl:max-w-[1440px]`}
      />

      <h2>Choose a movie by genre</h2>

      <div
        className={`relative flex items-start flex-wrap justify-around gap-16 sm:justify-between`}
      >
        <GenreLinkIcon iconID="comedy" />
        <GenreLinkIcon iconID="thriller" />
        <GenreLinkIcon iconID="detective" />
        <GenreLinkIcon iconID="drama" />
        <GenreLinkIcon iconID="romcom" />
        <GenreLinkIcon iconID="fantasy" />
        <GenreLinkIcon iconID="history" />
        <GenreLinkIcon iconID="sci-fi" />
        <GenreLinkIcon iconID="non-fic" />
        <GenreLinkIcon iconID="horror" />
        <GenreLinkIcon iconID="adventure" />
        <GenreLinkIcon iconID="cartoon" />
        <GenreLinkIcon iconID="musical" />
        <GenreLinkIcon iconID="anime" />
      </div>
    </div>
  );
};
