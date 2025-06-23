import React, { Suspense, use, useContext } from "react";
import { AuthContext } from "../../assets/AuthContext/AuthContext";
import ReviewList from "./ReviewList";
import { reviewByEmailPromise } from "../../API/ReviewsAPI";
import { Slide } from "react-awesome-reveal";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.email);
  return (
    <Slide>
      {" "}
      <div className="nuni">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-emerald-200 to-emerald-600 bg-clip-text text-transparent mt-8 mb-8 text-center">
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
    </Slide>
  );
};

export default MyReviews;
