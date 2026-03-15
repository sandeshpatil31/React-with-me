import React from "react";

function Card({ username, btnText = "Check Once"}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">

      {/* ------------------ Image Section ------------------ */}
      <div className="card-image">
        <img
          className="w-full"
          src="https://images.pexels.com/photos/34442266/pexels-photo-34442266.jpeg"
          alt="Course"
        />
      </div>

      {/* ------------------ User Info & Button Section ------------------ */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{username}</div>
        <p className="text-gray-700 text-base mb-4">
          Lorem ipsum dolor sit amet, consectetur <strong>{btnText}</strong> elit.
        </p>
        <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 transition">
          {btnText}
        </button>
      </div>

      {/* ------------------ Tags Section ------------------ */}
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>

    </div>
  );
}

export default Card;