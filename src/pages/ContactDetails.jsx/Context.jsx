import { useFormik } from "formik";
import * as Yup from "yup";
import React, { createContext } from "react";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
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
      console.log("Form Submitted:", values);
    },
  });

  const selectBox = useFormik({
    initialValues: {
      selectedServices: [],
    },
    validationSchema: Yup.object({
      selectedServices: Yup.array()
        .min(1, "Please select at least one service")
        .of(Yup.string()),
    }),
    onSubmit: (values) => {
      console.log("Selected Services:", values.selectedServices);
    },
  });

  const selectBudget = useFormik({
    initialValues: {
      selectedBudget: [],
    },
    validationSchema: Yup.object({
      selectedBudget: Yup.array()
        .min(1, "Please select at least one budget")
        .of(Yup.string().matches(/^\d+$/, "Budget must be a number")),
    }),
    onSubmit: (values) => {
      console.log("Selected Budget:", values.selectedBudget);
    },
  });

  const checkHandler = (id) => {
    selectBox.setFieldValue(
      "selectedServices",
      selectBox.values.selectedServices.includes(id)
        ? selectBox.values.selectedServices.filter(
            (serviceId) => serviceId !== id
          )
        : [...selectBox.values.selectedServices, id]
    );
  };

  return (
    <ContactContext.Provider
      value={{ formik, selectBudget, selectBox, checkHandler }}
    >
      {children}
    </ContactContext.Provider>
  );
};
