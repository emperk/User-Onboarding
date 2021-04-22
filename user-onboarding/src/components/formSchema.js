import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("username is required")
    .min(3, "username must be 3 chars long"),
  email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
  password: yup
    .string()
    .required("password is required")
    .min(4, "password must be 4 chars long")
  termsOfService: yup.string().oneOf(["I Agree", "I Do Not Agree. This is a SCAM!"], "Must Choose One or the Other"),
});
