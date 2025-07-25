import React, { use } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ServiceReviewList = ({ reviewByIdPromise }) => {
  const reviews = use(reviewByIdPromise);
  return (
    <div className="mb-22">
      {reviews.length > 0 ? (
        reviews?.map((review) => (
          <div
            key={review.id}
            className=" mb-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-emerald-700"
          >
            <div className="flex items-start space-x-4">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <img
                  src={review.photoUrl}
                  className="w-16 h-16 rounded-full object-cover ring-2 "
                />
              </div>

              {/* Review Content */}
              <div className="flex-1 min-w-0">
                {/* Header with name, rating, and date */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                    <h3 className="text-lg bg-gradient-to-br from-emerald-200 to-emerald-400 bg-clip-text text-transparent font-semibold ">
                      {review.displayName}
                    </h3>
                    <Rating
                      style={{ maxWidth: 200 }}
                      value={review.rating}
                      //   onChange={setRating}
                    />
                  </div>
                  <div className="text-sm ">{review.date}</div>
                </div>

                {/* Review Text */}
                <p className=" text-lg font-normal overflow-hidden">
                  {review.review}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          <h1 className="text-xl text-blue-600 text-center">No Data Added</h1>
        </>
      )}
    </div>
  );
};

export default ServiceReviewList;
