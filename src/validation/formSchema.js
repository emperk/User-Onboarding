import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(3, "name must be 3 chars long"),
  password: yup
    .string()
    .required("password is required")
    .min(5, "password must be 5 chars long"),
  email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"), 
  agree: yup.boolean(),
  disagree: yup.boolean(),
});
