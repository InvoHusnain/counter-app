import { useField } from "formik";
import React from "react";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field, "Fields");
  console.log(meta, "meta");

  return (
    <>
      <input {...field} {...props} />
      {meta.error && meta.touched ? <div>{meta.error}</div> : null}
      <span>I accept the terms and conditions</span>
    </>
  );
};

export default CustomCheckbox;
