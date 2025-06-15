import React, { useContext } from "react";
import { AuthContext } from "../../assets/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

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

    fetch("http://localhost:3000/services", {
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
    <div className="max-w-2xl mx-auto  p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 ">Add New Service</h2>
      <form onSubmit={handleAddService} className="space-y-5">
        <div>
          <label className="block font-medium mb-1">Service Image URL</label>
          <input
            name="photoUrl"
            type="text"
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Service Title</label>
          <input
            name="title"
            type="text"
            placeholder="Enter title"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Company Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter company name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Company Website</label>
          <input
            name="companyWebsite"
            type="text"
            placeholder="Enter website URL"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Service Description</label>
          <textarea
            name="description"
            placeholder="Describe your service"
            rows="4"
            className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1">Category</label>
          <input
            name="category"
            type="text"
            placeholder="e.g. Marketing, Design"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Price</label>
          <input
            name="price"
            type="number"
            placeholder="Enter price"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Added Date</label>
          <input
            name="date"
            type="date"
            value={today}
            readOnly
            className="w-full px-4 py-2 border rounded-m cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">User Email</label>
          <input
            name="email"
            type="email"
            value={user.email}
            readOnly
            className="w-full px-4 py-2 border rounded-m cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          className=" cursor-pointer w-full bg-blue-400 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow transition"
        >
          Submit Service
        </button>
      </form>
    </div>
  );
};

export default AddServices;
