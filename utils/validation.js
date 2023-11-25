import * as yup from "yup";

const REQUIRED_MESSAGE = "This field cannot be empty";
// Page User
export const createUser = yup.object({
  full_name: yup.string().required(REQUIRED_MESSAGE),
});

