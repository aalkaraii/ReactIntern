import React, { useContext, useEffect } from "react";
import { User, Mail, Phone, Building } from "lucide-react";
import { ContactContext } from "./Context";

const fields = [
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
  const { formik, selectBox } = useContext(ContactContext);

  useEffect(() => {
    formik.validateForm().then((errors) => {
      isSubmitTrue(Object.keys(errors).length === 0);
    });
  }, [formik.values, selectBox.values.selectedServices, isSubmitTrue]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid pt-13 grid-cols-1 md:grid-cols-2 gap-4"
    >
      {fields.map((field) => (
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
              onBlur={formik.handleBlur}
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
            {/* Fixing icon rendering */}
            {React.createElement(field.icon, {
              className:
                "absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400",
              size: 20,
            })}
          </div>
        </div>
      ))}
    </form>
  );
};

export default ContactDetails;
