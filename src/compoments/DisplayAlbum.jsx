import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import assets, { albumsData, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const {playWithId} = useContext(PlayerContext);

  return (
    <div>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5 mr-2"
              src={assets.spotify_logo}
              alt=""
            />
            <b>Spotify </b>• 1,234,344 likes
            <b> • 50 songs,</b>
            khoảng 4 giờ 53 phút
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Tiêu đề
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Ngày thêm</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div onClick={() => playWithId(item.id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <div className="col-span-2 sm:col-span-1 flex items-center">
            <strong className="mr-4 text-[#a7a7a7]">{index + 1}</strong>
            <img className="inline w-10 h-10 mr-5" src={item.image} alt="" />
            <span className="text-white">{item.name}</span>
          </div>
          <p className="text-[15px]">{item.album}</p>
          <p className="text-[15px] hidden sm:block">10 ngày trước</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayAlbum;
