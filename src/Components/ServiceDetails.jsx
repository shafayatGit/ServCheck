import React, { Suspense, useContext, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { Star, MapPin, Clock, Phone, Mail, User, Calendar } from "lucide-react";
import { AuthContext } from "../assets/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import axios from "axios";
import ServiceReviewList from "./serviceReviewList";
import { reviewByIdPromise } from "../API/ReviewsAPI";
import { Slide } from "react-awesome-reveal";

const ServiceDetails = () => {
  const Servicedata = useLoaderData();
  console.log(Servicedata);

  // const [reviews, setReviews] = useState(reviewData);
  const { id } = useParams();

  const { user } = useContext(AuthContext);

  const singleService = Servicedata.find((service) => service._id === id);
  //   console.log(singleService);
  const { _id, category, description, title, price, photoUrl } = singleService;

  // const [service] = useState(singleService);

  // const formatDate = (dateString) => {
  //   return new Date(dateString).toLocaleDateString("en-US", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   });
  // };

  const [rating, setRating] = useState(0);

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    // const reviewInfo = Object.fromEntries(formData.entries());
    const newReview = {
      cardId: id,
      review: review,
      rating: rating,
      date: new Date().toISOString(),
      displayName: user.displayName,
      photoUrl: user.photoURL,
      email: user.email,
      title: title,
    };
    console.log(newReview);

    axios
      .post("https://servcheck-server.vercel.app/reviews", newReview)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Your review has been created`,
            showConfirmButton: false,
            timer: 2000,
          });
          // toast.success("Group has been created successfully.");
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="px-5">
      <Slide>
        <div className="nuni px-5 mx-auto mt-24 card card-side bg-base-100 flex items-center flex-col md:flex-row shadow shadow-emerald-300 hover:scale-105 active:scale-105 transition ease-in-out hover:shadow-2xl hover:shadow-emerald-300 active:shadow-2xl active:shadow-emerald-300 work">
          <figure>
            <img className="rounded-xl h-86" src={photoUrl} alt="Movie" />
          </figure>
          <div className="card-body">
            <div className="flex flex-col md:flex-row justify-between">
              <h2 className="text-xl font-semibold">
                Service Name: <br />
                <span className="border-2 mt-2 text-sm border-emerald-400 rounded-full bg-emerald-200 px-3 py-1 text-black">
                  {" "}
                  {title}
                </span>
              </h2>
              <h2 className="text-xl font-semibold">
                Category: <br />
                <span className="border-2 mt-2 text-sm border-emerald-400 rounded-full bg-emerald-200 px-3 py-1 text-black">
                  {category}
                </span>
              </h2>
            </div>
            <h2 className="text-xl font-semibold">
              Description:{" "}
              <span className="text-sm font-medium">{description}</span>
            </h2>
            <div className="flex justify-between">
              {/* <h2 className="text-xl font-semibold">
              Meeting Location: <br />{" "}
              <span className="border-2 mt-2 text-sm border-emerald-400 rounded-full bg-emerald-200 px-3 py-1 text-black">
                {meetingLocation}
              </span>
            </h2> */}
              <h2 className="text-xl font-semibold">
                price: <br />
                <span className="border-2 mt-2 text-sm border-emerald-400 rounded-full bg-emerald-200 px-3 py-1 text-black">
                  {price}
                </span>
              </h2>
            </div>
            {/* <h2 className="text-xl font-semibold">
            Starting Date: <span className="text-emerald-600">{startDate}</span>
          </h2> */}

            <div className="flex justify-between">
              {" "}
              <Link to={"/services"}>
                <button className="mt-3 relative font-semibold rounded text-lg px-5 py-2.5 overflow-hidden group bg-emerald-400 relative hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-400 active:bg-gradient-to-r active:from-emerald-500 active:to-emerald-400 text-black hover:ring-2 hover:ring-offset-2 hover:ring-emerald-800 active:ring-2 active:ring-offset-2 active:ring-emerald-800 transition-all ease-out duration-300">
                  <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12  opacity-10 rotate-12 group-hover:-translate-x-40 group-active:-translate-x-40 ease"></span>
                  <span class="relative">All Services</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Slide>
      {/* Add Review Section */}
      <Slide>
        <h2 className="text-4xl bg-gradient-to-br from-emerald-800 to-emerald-300 bg-clip-text text-transparent font-bold mb-4 mt-5">
          Add Your Review
        </h2>

        <form onSubmit={handleReview}>
          <div className="mb-3">
            <label className="block text-sm bg-gradient-to-br from-emerald-200 to-emerald-400 bg-clip-text text-transparent font-medium mb-2">
              Your Rating
            </label>
            <Rating
              style={{ maxWidth: 200 }}
              value={rating}
              onChange={setRating}
            />
          </div>

          <div>
            <label className="block text-sm bg-gradient-to-br from-emerald-200 to-emerald-400 bg-clip-text text-transparent font-medium   mb-2">
              Your Review
            </label>
            <textarea
              name="review"
              placeholder="Share your experience with this service..."
              className="w-full p-3 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
              rows="4"
            />
          </div>

          <input
            value={"Add Review"}
            type="submit"
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          ></input>
        </form>
      </Slide>
      <Slide>
        <div>
          <h1 className="text-4xl bg-gradient-to-br from-emerald-800 to-emerald-300 bg-clip-text text-transparent font-bold mt-5 border-b mb-10 text-center">
            All Reviews
          </h1>
          <Suspense
            fallback={
              <div className="w-full h-dvh mx-auto flex justify-center items-center">
                <span className="loading loading-dots loading-xl"></span>
              </div>
            }
          >
            <ServiceReviewList
              reviewByIdPromise={reviewByIdPromise(id)}
            ></ServiceReviewList>
          </Suspense>
        </div>
      </Slide>
    </div>
  );
};

export default ServiceDetails;
