import React, { Suspense, use, useContext } from "react";
import { AuthContext } from "../../assets/AuthContext/AuthContext";
import ReviewList from "./ReviewList";
import { reviewByEmailPromise } from "../../API/ReviewsAPI";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  return (
    <div className="nuni">
      <h1 className="text-3xl mt-10 font-bold text-center mb-8 text-blue-800">
        My Reviews
      </h1>
      <Suspense
        fallback={
          <div className="w-full h-dvh mx-auto flex justify-center items-center">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <ReviewList
          reviewByEmailPromise={reviewByEmailPromise(
            user.email,
            user.accessToken
          )}
        ></ReviewList>
      </Suspense>
    </div>
  );
};

export default MyReviews;
