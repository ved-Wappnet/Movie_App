import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";

const schema = yup
  .object({
    firstName: yup.string().trim().required("FirstName is Required"),
    lastName: yup.string().required("LastName is Required"),
    email: yup
      .string()
      .email("Email must be Valid")
      .required(" Email is Required"),
    phone: yup.string().required("Phone number is Required"),
    TextArea: yup
      .string()
      .required("Please Enter Some Descprition to reach you!!")
      .min(20),
    checkbox: yup.boolean().oneOf([true], "Checkbox is required"),
    radioButton: yup.string().required("Please select an option"),
  })
  .required();

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { themeMode } = useContext(ThemeContext);

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`mt-32 max-w-md mx-auto p-7 rounded-2xl ${
        themeMode === "dark" ? "bg-gray-300" : "bg-gray-100"
      }`}
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="form-input mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-red-500"
          {...register("firstName")}
        />
        {errors.firstName && (
          <span className="text-red-500 text-sm">
            {errors.firstName.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="form-input mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-red-500"
          {...register("lastName")}
        />
        {errors.lastName && (
          <span className="text-red-500 text-sm">
            {errors.lastName.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-input mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-red-500"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone No.
        </label>
        <input
          type="text"
          id="phone"
          className="form-input mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-red-500"
          {...register("phone")}
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Choose an option:
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            value="option1"
            {...register("radioButton")}
            className="mr-2"
          />
          General Inquiry
        </label>
        <label className="inline-flex items-center ml-11">
          <input
            type="radio"
            value="option2"
            {...register("radioButton")}
            className="mr-2"
          />
          Feedback/Suggestions
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="option3"
            {...register("radioButton")}
            className="mr-2"
          />
          Report an Issue/Bug
        </label>
        <label className="inline-flex items-center ml-6">
          <input
            type="radio"
            value="option3"
            {...register("radioButton")}
            className="mr-2"
          />
          Partnership Opportunities
        </label>
        {errors.radioButton && (
          <span className="text-red-500 text-sm">
            {errors.radioButton.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="text-area"
          className="block text-sm font-medium text-gray-700"
        >
          What would you like to discuss ?
        </label>
        <textarea
          type="text"
          id="text-area"
          className="form-input mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-red-500"
          {...register("TextArea")}
        />
        {errors.TextArea && (
          <span className="text-red-500 text-sm">
            {errors.TextArea.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          <input type="checkbox" {...register("checkbox")} className="mr-2" />I
          agree to the terms and conditions
        </label>
        {errors.checkbox && (
          <span className="text-red-500 text-sm">
            {errors.checkbox.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactUs;
