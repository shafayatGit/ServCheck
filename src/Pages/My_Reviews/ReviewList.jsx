import React, { use, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { GrUpdate } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router";
import Modal2 from "../../Components/Modal2";
import Swal from "sweetalert2";
import axios from "axios";

const ReviewList = ({ reviewByEmailPromise }) => {
  const initialReviews = use(reviewByEmailPromise);
  const [reviews, setReviews] = useState(initialReviews);
  const [isOpen, setIsOpen] = useState(false);

  const [singleReview, setSingleReview] = useState({});
  const handleReviewId = (id) => {
    const review = reviews.find((service) => service._id === id);
    setSingleReview(review);
  };
  const { _id, review, rating } = singleReview;
  const [newRating, setRating] = useState(rating);

  const handleSubmit = (e) => {
    // console.log("hello");
    e.preventDefault();
    const form = e.target;
    const reviewData = form.review.value;
    // const photoUrl = form.photoUrl.value;
    // const formData = new FormData(form);
    // const updatedFormData = Object.fromEntries(formData.entries());
    const newReview = {
      review: reviewData,
      rating: newRating,
      date: new Date().toISOString(),
    };

    axios
      .patch(`https://servcheck-server.vercel.app/reviews/${_id}`, newReview)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Your review has been updated`,
            showConfirmButton: false,
            timer: 2000,
          });
          // navigate("/myServices");
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Deleting One Item
        fetch(`https://servcheck-server.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount === true) {
              const remaining = reviews.filter((rem) => rem._id !== id);
              setReviews(remaining);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Your review has been created`,
                showConfirmButton: false,
                timer: 2000,
              });
            }
          });
      }
    });
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="my-5 px-3">
      {reviews.map((reviewData) => (
        <div
          key={reviewData.id}
          className=" mb-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border"
        >
          <div className="flex items-start space-x-4">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <img
                src={reviewData.photoUrl}
                className="w-16 h-16 rounded-full object-cover ring-2 "
              />
            </div>

            {/* Review Content */}
            <div className="flex-1 min-w-0">
              {/* Header with name, rating, and date */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                  <h3 className="text-lg font-semibold ">
                    {reviewData.displayName}
                  </h3>

                  <Rating
                    style={{ maxWidth: 200 }}
                    value={reviewData.rating}
                    // onChange={setRating}
                  />
                </div>
                <div className="text-sm ">{reviewData.date}</div>
              </div>
              <div className="flex items-center text-lg font-semibold ">
                Title: <h3 className="text-sm">{reviewData.title}</h3>
              </div>
              {/* Review Text */}
              <div className="flex justify-between">
                <div className=" text-lg font-normal max-w-xl md:max-w-3xl overflow-hidden">
                  <h1>{reviewData.review}</h1>
                </div>
                <div className="px-3 py-1  font-semibold rounded-md flex flex-col gap-3">
                  <Link>
                    {" "}
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      onClick={(_id) => {
                        openModal(_id);
                        handleReviewId(reviewData._id);
                      }}
                      className="btn"
                    >
                      <GrUpdate
                        className="text-green-700 rounded-full"
                        size={15}
                      />
                    </button>
                  </Link>
                  {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      {/* Overlay */}
                      <div
                        className="absolute inset-0 bg-black opacity-50"
                        onClick={closeModal}
                      ></div>

                      {/* Modal content */}
                      <div className="relative  rounded-lg shadow-lg w-96 p-6 z-10">
                        {/* Close button */}
                        <button
                          onClick={closeModal}
                          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
                        >
                          &times;
                        </button>

                        {/* Modal Body */}
                        <form className="" onSubmit={handleSubmit}>
                          <label className="block text-sm font-medium  mb-2">
                            Update Your Review
                          </label>
                          <div className="mb-2">
                            <Rating
                              style={{ maxWidth: 200 }}
                              value={newRating}
                              onChange={setRating}
                            />
                          </div>
                          <div>
                            <textarea
                              defaultValue={review}
                              name="review"
                              placeholder="Update your experience with this service..."
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                              rows="4"
                            />
                          </div>

                          <input
                            value={"Update Review"}
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                          ></input>
                        </form>
                      </div>
                    </div>
                  )}

                  <button
                    // onClick={() => handleDelete(service._id)}
                    className=" btn"
                  >
                    <TiDeleteOutline
                      onClick={() => handleDelete(reviewData._id)}
                      className="text-red-700"
                      size={20}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
