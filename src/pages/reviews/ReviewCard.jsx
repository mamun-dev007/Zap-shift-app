import React from "react";
import { FaQuoteLeft } from "react-icons/fa";


const ReviewCard = ({ review }) => {
  const { userName, user_photoURL, ratings, date } = review;
  return (
    <div className="">
    
      <div className="card w-full max-w-md bg-white shadow-md p-6 border rounded-xl">
        <div className="text-teal-700 text-3xl mb-3">
          <FaQuoteLeft />
        </div>

        <p className=" mb-5">{review.review}</p>

        <div className="border-t-2 border-dashed border-gray-300 my-4"></div>

        <div className="flex items-center gap-4">
          <img
            src={user_photoURL}
            alt="user"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h3 className="text-teal-900 font-semibold text-lg">{userName}</h3>

            <p className="text-gray-500 text-sm">
              {ratings} ★ – {new Date(date).toDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
