import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHeart,
  FaComment,
  FaShare,
  FaUserTie
} from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden mx-auto text-center">
      <div className="bg-blue-500 py-10">
        <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center text-4xl text-blue-500 -mt-10 shadow-md">
          <FaUserTie />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold">Bhyrnne jabin Cejudo</h3>
        <p className="text-gray-500 text-sm mb-4">database administrator</p>

        <div className="flex justify-center space-x-4 mb-5">
          <a href="#" className="bg-blue-600 text-white p-2 rounded-full">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-sky-400 text-white p-2 rounded-full">
            <FaTwitter />
          </a>
          <a href="#" className="bg-pink-500 text-white p-2 rounded-full">
            <FaInstagram />
          </a>
          <a href="#" className="bg-red-600 text-white p-2 rounded-full">
            <FaYoutube />
          </a>
        </div>

        <div className="flex justify-center gap-4 mb-5">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold">
            Subscribe
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold">
            Message
          </button>
        </div>

        <div className="flex justify-around text-gray-600 text-sm border-t pt-4">
          <div className="flex items-center gap-1"><FaHeart /> 60k</div>
          <div className="flex items-center gap-1"><FaComment /> 20k</div>
          <div className="flex items-center gap-1"><FaShare /> 12k</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
