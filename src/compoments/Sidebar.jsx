import React from "react";
import assets from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hiddden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col jutify-around">
        <div className="flex items-center gap-3 pl-4 pt-4 cursor-pointer ">
          <img className="w-6" src={assets.spotify_logo} alt="" />
          <p className="font-bold">Spotify</p>
        </div>
        <div className="flex items-center gap-3 pl-4 pt-4 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-blod">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-4 pt-4 pb-4 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-blod">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] ruonded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex item-center gap-3 ">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold items-center">Thư viện</p>
          </div>
          <div className="flex items-center gap-3 flex-wrap content-center">
            <img className="w-4 h-4" src={assets.arrow_icon} alt="" />
            <div className="relative inline-block group">
              <img className="w-5" src={assets.plus_icon} alt="" />
              <p className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Tạo danh sách phát mới
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Tạo danh sách phát đầu tiên của bạn</h1>
          <p className="font-light">Rất dễ! Chúng tôi có thể giúp bạn</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Tạo danh sách phát
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Hãy cùng tìm và theo dõi một số podcast</h1>
          <p className="font-light">Chúng tôi sẽ cập nhật thông tin về các tập mới</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Duyệt xem podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
