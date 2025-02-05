import React, { useEffect, useState } from "react";
import { User, Mail, Phone, Building } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";

const arr = [
  {
    id: "name",
    name: "name",
    label: "Name",
    placeholder: "John Carter",
    icon: User,
    type: "text",
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    placeholder: "Email address",
    icon: Mail,
    type: "email",
  },
  {
    id: "phone",
    name: "phone",
    label: "Phone Number",
    placeholder: "(123) 456 - 7890",
    icon: Phone,
    type: "tel",
  },
  {
    id: "company",
    name: "company",
    label: "Company",
    placeholder: "Company name",
    icon: Building,
    type: "text",
  },
];

const ContactDetails = ({ isSubmitTrue }) => {
  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", company: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
      company: Yup.string().required("Company name is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    isSubmitTrue(Object.keys(formik.errors).length === 0); // Pass validation status to HomePage
  }, [formik.errors, isSubmitTrue]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid pt-13 grid-cols-1 md:grid-cols-2 gap-4"
    >
      {arr.map((field) => (
        <div key={field.name} className="relative">
          <label className="block font-medium text-gray-700">
            {field.label}
          </label>
          <div className="relative">
            <input
              id={field.id}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              onChange={formik.handleChange}
              value={formik.values[field.name]}
              className={`w-full border rounded-full px-4 py-3 pr-10 shadow-sm ${
                formik.errors[field.name]
                  ? "border-red-500"
                  : "bg-white hover:bg-gray-300"
              }`}
            />
            {formik.errors[field.name] && (
              <div className="text-red-600 text-sm">
                {formik.errors[field.name]}
              </div>
            )}
            <field.icon
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
      ))}
      <button
        type="submit"
        disabled={Object.keys(formik.errors).length > 0}
        className={`px-4 py-2 rounded ${
          Object.keys(formik.errors).length === 0
            ? "bg-blue-500"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactDetails;
