import { useField } from "formik";
import React from "react";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field, "Fields");
  console.log(meta, "meta");

  return (
    <>
      <label>{label}</label>
      <input {...field} {...props} />
      {meta.error && meta.touched ? <div>{meta.error}</div> : null}
    </>
  );
};

export default CustomInput;
