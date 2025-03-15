const z = require("zod");

// creating an object Schema

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email Is Required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email Must Be Atleast Of 3 Characters" })
    .max(255, { message: "Email Must Not Be More Than 255 Characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least of 6 characters" })
    .max(1024, "Password can't be greater than 1024 characters"),
});

const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name Is Required" })
    .trim()
    .min(3, { message: "Name Must Be At Least Of 3 Characters" })
    .max(255, { message: "Name Must Not Be More Than 255 Characters" }),
  phone: z
    .string({ required_error: "Phone Is Required" })
    .trim()
    .min(10, { message: "Phone Must Be Atleast Of 10 Characters" })
    .max(20, { message: "Phone Must Not Be More Than 20 Characters" }),
});

module.exports = { loginSchema, signupSchema };
