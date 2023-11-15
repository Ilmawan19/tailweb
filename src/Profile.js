import React from 'react';

const ProfileCard = () => {
  return (
    <div className="bg-black font-sans h-screen w-full flex flex-row justify-center items-center">
      <div className="card w-96 mx-auto bg-white shadow-xl hover:shadow">
        <img
          className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
          src="https://img.freepik.com/premium-photo/portrait-red-haired-guy-with-glasses-anime-style_546042-61.jpg?w=996"
          alt="Profile"
        />
        <div className="text-center mt-2 text-3xl font-medium">Ilmawan Rizki</div>
        <div className="text-center mt-2 font-light text-sm">@Ilmawann_</div>
        <div className="text-center font-normal text-lg">Food Vlogger</div>
        <div className="px-6 text-center mt-2 font-light text-sm">
          <p>Pencita makanan yang juga suka berenang</p>
        </div>
        <hr className="mt-8" />
        <div className="flex p-4">
          <div className="w-1/2 text-center">
            <span className="font-bold">1.8 k</span> Followers
          </div>
          <div className="w-0 border border-gray-300"></div>
          <div className="w-1/2 text-center">
            <span className="font-bold">2.0 k</span> Following
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
