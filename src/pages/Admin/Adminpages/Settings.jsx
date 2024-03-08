import { useState } from "react";

const Settings = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    address1: "",
    address2: "",
  });

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="mt-16 bg-gray-200 h-[100vh] w-[1279px]">
      <div>
        <h1 className="px-4 py-7 text-2xl font-medium">General</h1>
      </div>
      <hr style={{ borderColor: "#ab9d9d" }} />
      <div className="flex flex-row gap-9 m-5">
        <div className="first">
          <h2 className="font-medium text-xl">General Setting</h2>
          <p className="text-gray-500">Profile configuration settings</p>
        </div>
        <div className="second w-[73%] ml-[6%]">
          <div className="shadow-lg rounded-md p-4 bg-white">
            <p className="mb-6 text-xl font-medium">Basic Information</p>
            <form onSubmit={handleSubmit}>
              <div className="flex mb-4">
                <label htmlFor="fullName" className="mb-2">
                  Full Name
                </label>
                <div className="flex gap-4 ml-40">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="p-2 border border-gray-500 w-[405px] rounded-md flex-1"
                  />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="p-2 border border-gray-500 rounded-md flex-1"
                  />
                </div>
              </div>
              <div className="flex mb-4">
                <label htmlFor="email" className="mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 border border-gray-500 w-[70%] ml-48 rounded-md"
                />
              </div>
              <div className="flex mb-4">
                <label htmlFor="location" className="mb-2">
                  Location
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleDropdownChange}
                  className="p-2 border border-gray-500 w-[70%] ml-[19%] rounded-md"
                >
                  <option value="">-- Select Location --</option>
                  <option value="INDIA">INDIA</option>
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                </select>
              </div>
              <div className="flex mb-4">
                <label htmlFor="email" className="mb-2">
                  Address 1
                </label>
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  placeholder=" Address 1"
                  value={formData.address1}
                  onChange={handleChange}
                  className="p-2 border border-gray-500 w-[70%] ml-40 rounded-md"
                />
              </div>
              <div className="flex mb-4">
                <label htmlFor="email" className="mb-2">
                  Address 2
                </label>
                <input
                  type="text"
                  id="address2"
                  name="address2"
                  placeholder="Address 2"
                  value={formData.address2}
                  onChange={handleChange}
                  className="p-2 border border-gray-500 w-[70%] ml-40 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md block"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
