import { useField } from "formik";
import React from "react";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field, "Fields");
  console.log(meta, "meta");

  return (
    <>
      <label>{label}</label>
      <select {...field} {...props} />
      {meta.error && meta.touched ? <div>{meta.error}</div> : null}
    </>
  );
};

export default CustomSelect;
