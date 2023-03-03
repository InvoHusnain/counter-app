import * as Yup from "yup";
export const advanceSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  jobType: Yup.string()
    .oneOf(["designer", "developer", "manager", "other"])
    .required("Required"),
  acceptedTos: Yup.boolean().oneOf(
    [true],
    "Please accept the terms of services"
  ),
});
