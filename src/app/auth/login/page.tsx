"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation"; // Import useRouter
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography, Link, Divider, Stack } from "@mui/material";
import { useLoginMutation } from "@/lib/features/auth/authSevice";


// Define your Zod schema
const validationSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
});

export default function Login() {
  const router = useRouter(); // Initialize useRouter for navigation
  const [login, { isLoading, error }] = useLoginMutation();

  const [values, setValues] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    // Validate the form values using Zod
    try {
      validationSchema.parse(values);
      setErrors({}); // Clear errors if validation passes

      // Proceed with the login request
      const response = await login({
        email: values.email,
        password: values.password,
      }).unwrap();
      console.log("Login successful", response);
      router.push("/bookr/dashboard");
    } catch (err:any) {
        console.error("Unexpected error:", err);
      }
  };

  return (
    <Box alignSelf="center" display="flex" width="70%" flexDirection="column" columnGap={3} sx={{ backgroundColor: "white" }}>
      <Stack direction="row" width="50%" justifyContent="space-evenly" alignItems="center">
        <img
          src="/images/books-blue.png"
          alt="Book Rent"
          width="40"
          height="40"
        />
        <Typography fontSize={24}>
          Book Rent
        </Typography>
      </Stack>
      <Typography fontSize={24}>
        Login
      </Typography>
      <Divider variant="middle" />
      <form onSubmit={handleSubmit}>
        <TextField
          id="email"
          name="email"
          size="small"
          margin="none"
          label="Email Address"
          variant="outlined"
          fullWidth
          value={values.email}
          onChange={handleChange}
        />
        <TextField
          id="password"
          name="password"
          size="small"
          margin="none"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginTop: 2 }}
          value={values.password}
          onChange={handleChange}
        />
        <FormControlLabel
          control={
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              color="primary"
              checked={values.rememberMe}
              onChange={handleChange}
            />
          }
          label="Remember me"
        />
        {/* {error && <Typography color="error">{error}</Typography>} */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          fullWidth
          disabled={isLoading}
          sx={{ marginTop: 2 }}
        >
          {isLoading ? "Loading..." : "LOGIN"}
        </Button>
        <Typography
          variant="body2"
          align="center"
          color="black"
          sx={{ marginTop: 2 }}
        >
          Don't have an account?{" "}
          <Link href="#" color="primary" underline="hover">
            Sign up
          </Link>
        </Typography>
      </form>
    </Box>
  );
}
