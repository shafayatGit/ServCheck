import React, { use, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { GrUpdate } from "react-icons/gr";
import { Link, useNavigate } from "react-router";
import Modal from "./Modal";
import Swal from "sweetalert2";
import axios from "axios";

const ServicesList = ({ serviceDetailsPromise }) => {
  const services = use(serviceDetailsPromise);
  const [serviceData, setServiceData] = useState(services);
  const navigate = useNavigate();
  //   console.log(services);
  //   const { _id, category, description, photoUrl, title, price } = use(
  //     serviceDetailsPromise
  //   );

  const [singleService, setSingleService] = useState({});
  const handleServiceId = (id) => {
    const service = services.find((service) => service._id === id);
    setSingleService(service);
  };

  const { _id, category, description, photoUrl, title, price } = singleService;

  //   For Updating
  const handleSubmit = (e) => {
    // console.log("hello");
    e.preventDefault();
    const form = e.target;
    // const photoUrl = form.photoUrl.value;
    const formData = new FormData(form);
    const updatedFormData = Object.fromEntries(formData.entries());

    axios
      .patch(
        `https://servcheck-server.vercel.app/services/${_id}`,
        updatedFormData
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Your Service has been updated`,
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/myServices");
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   For Deleting
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
        fetch(`https://servcheck-server.vercel.app/services/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount === true) {
              const remaining = serviceData.filter((rem) => rem._id !== id);
              setServiceData(remaining);

              Swal.fire({
                title: "Deleted!",
                text: "Your service has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-emerald-300">
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {serviceData.map((service) => (
              <tr
                key={service._id}
                className="border-b  border-emerald -500 border-opacity-20"
              >
                <td className="p-3 ">
                  <img
                    className="mask mx-auto mask-squircle h-12 w-12"
                    src={service.photoUrl}
                    alt=""
                  />
                </td>
                <td className="p-3 md:text-lg font-medium work">
                  <p>{service.name}</p>
                </td>
                <td className="p-3">
                  <p className="md:text-lg font-medium work">
                    {service.category}
                  </p>
                </td>
                <td className="p-3 md:text-lg font-medium work">
                  <p>{service.description}</p>
                </td>

                <td className="p-3 ">
                  <div className="px-3 py-1  font-semibold rounded-md flex flex-col gap-3">
                    <Link>
                      {" "}
                      <button
                        onClick={() => {
                          setIsModalOpen(true);
                          handleServiceId(service._id);
                        }}
                        className="btn"
                      >
                        <GrUpdate
                          className="text-green-700 rounded-full"
                          size={15}
                        />
                      </button>
                    </Link>
                    <Modal
                      isOpen={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                    >
                      <h2 className="text-xl text-center font-semibold mb-4">
                        Update Your Service
                      </h2>
                      <form
                        onSubmit={handleSubmit}
                        className="space-y-5 pt-4 pb-4"
                      >
                        <div>
                          <label className="block  font-medium mb-1">
                            Service Image URL
                          </label>
                          <input
                            defaultValue={photoUrl}
                            name="photoUrl"
                            type="text"
                            placeholder="Enter image URL"
                            className="   w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                          />
                        </div>

                        <div>
                          <label className="  block font-medium mb-1">
                            Service Title
                          </label>
                          <input
                            defaultValue={title}
                            name="title"
                            type="text"
                            placeholder="Enter title"
                            className=" w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                          />
                        </div>

                        <div>
                          <label className="block font-medium mb-1">
                            Service Description
                          </label>
                          <textarea
                            defaultValue={description}
                            name="description"
                            placeholder="Describe your service"
                            rows="4"
                            className=" w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                          ></textarea>
                        </div>

                        <div>
                          <label className=" block font-medium mb-1">
                            Category
                          </label>
                          <input
                            defaultValue={category}
                            name="category"
                            type="text"
                            placeholder="e.g. Marketing, Design"
                            className=" w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                          />
                        </div>

                        <div>
                          <label className=" block font-medium mb-1">
                            Price
                          </label>
                          <input
                            defaultValue={price}
                            name="price"
                            type="number"
                            placeholder="Enter price"
                            className=" w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                          />
                        </div>

                        <input
                          value="Update Service"
                          type="submit"
                          className="btn cursor-pointer w-full bg-blue-400 hover:bg-blue-700  font-semibold py-2 px-4 rounded-md shadow transition"
                        ></input>
                      </form>
                    </Modal>

                    <button
                      onClick={() => handleDelete(service._id)}
                      className=" btn"
                    >
                      <TiDeleteOutline className="text-red-700" size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicesList;
