import React, { useContext } from "react";
import { AuthContext } from "../../assets/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { Fade } from "react-awesome-reveal";

const AddServices = () => {
  const { user } = useContext(AuthContext);
  const today = new Date().toISOString().split("T")[0];

  const navigate = useNavigate();
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const serviceInfo = Object.fromEntries(formData.entries());
    console.log(serviceInfo);

    fetch("https://servcheck-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Your group has been created`,
            showConfirmButton: false,
            timer: 2000,
          });
          // toast.success("Group has been created successfully.");
        }
        navigate("/services");
        console.log("from db", data);
      });
  };

  return (
    <Fade>
      <div className="nuni mt-26 text-sm bg-gradient-to-br from-emerald-500 to-emerald-800 max-w-2xl mx-auto  p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl bg-gradient-to-br from-emerald-700 to-emerald-900 bg-clip-text text-transparent font-bold text-center mb-6 ">
          Add New Service
        </h2>
        <form onSubmit={handleAddService} className="space-y-5 ">
          <div>
            <label className="block text-white font-medium mb-1">
              Service Image URL
            </label>
            <input
              name="photoUrl"
              type="text"
              placeholder="Enter image URL"
              className="  text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className=" text-white block font-medium mb-1">
              Service Title
            </label>
            <input
              name="title"
              type="text"
              placeholder="Enter title"
              className="text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className="text-white block font-medium mb-1">
              Company Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter company name"
              className="text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className="text-white block font-medium mb-1">
              Company Website
            </label>
            <input
              name="website"
              type="text"
              placeholder="Enter website URL"
              className="text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Service Description
            </label>
            <textarea
              name="description"
              placeholder="Describe your service"
              rows="4"
              className="text-white w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400"
            ></textarea>
          </div>

          <div>
            <label className="text-white block font-medium mb-1">
              Category
            </label>
            <input
              name="category"
              type="text"
              placeholder="e.g. Marketing, Design"
              className="text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className="text-white block font-medium mb-1">Price</label>
            <input
              name="price"
              type="number"
              placeholder="Enter price"
              className="text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className="text-white block font-medium mb-1">
              Added Date
            </label>
            <input
              name="date"
              type="date"
              value={today}
              readOnly
              className="text-white w-full px-4 py-2 border rounded-m cursor-not-allowed"
            />
          </div>

          <div>
            <label className="text-white block font-medium mb-1">
              User Email
            </label>
            <input
              name="email"
              type="email"
              value={user.email}
              readOnly
              className="text-white w-full px-4 py-2 border rounded-m cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            className=" cursor-pointer w-full bg-emerald-500 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-md shadow transition"
          >
            Submit Service
          </button>
        </form>
      </div>
    </Fade>
  );
};

export default AddServices;
