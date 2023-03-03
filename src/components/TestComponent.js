import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advanceSchema } from "./Schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";

const TestComponent = () => {
  return (
    <>
      <Formik
        initialValues={{ username: "", jobType: "", acceptedTos: false }}
        validationSchema={advanceSchema}
      >
        {(props) => (
          <Form>
            <CustomInput
              label="username"
              name="username"
              type="text"
              placeholder="Please Enter your name"
            />
            <CustomSelect
              label="JobType"
              name="jobType"
              placeholder="Please select a job"
            >
              <option value="">Please select a job</option>
              <option value="designer">designer</option>
              <option value="developer">developer</option>
              <option value="manager">manager</option>
              <option value="other">other</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="acceptedTos" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default TestComponent;
