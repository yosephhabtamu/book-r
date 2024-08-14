"use client";

import React, { useEffect, useState } from "react";
import { set, z } from "zod";
import { useRouter } from "next/navigation"; // Import useRouter
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Link,
  Divider,
  Stack,
} from "@mui/material";
import { useLoginMutation } from "@/lib/features/auth/authSevice";
import {
  setCredentials, clearCredentials
} from "@/lib/features/auth/authSlice";
import SnackBarWrapper from "@/app/components/snackBar";
import { useDispatch } from "react-redux";

// Define your Zod schema
const validationSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
});

export default function Login() {
  const dispatch =  useDispatch();
  const router = useRouter(); // Initialize useRouter for navigation
  const [login, { isLoading, error }] = useLoginMutation();
  const [response, setResponse] = useState({ accessToken: "", role: "" });

  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");

  const [values, setValues] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
     const isValid =  validationSchema.parse(values);

      // Proceed with the login request
      const result =  await login({
        email: isValid.email,
        password: isValid.password,
      }).unwrap();
      setResponse({
        accessToken: result.token,
          role: result.role,
        })
    } catch (err: any) {
      console.error("Unexpected error:", err);
      // dispatch(clearCredentials());
      setMessage(err.data.message);
      setSeverity("error");
    }
    
  };

  useEffect(() => {
      if(!response.accessToken) return;
    setMessage("Login successful"); 
      setSeverity("success");
      dispatch(setCredentials(response));
      router.push("/bookr/dashboard");
  }, [response]);


  return (
    <Box
      alignSelf="center"
      display="flex"
      width="70%"
      flexDirection="column"
      columnGap={3}
      sx={{ backgroundColor: "white" }}
    >
      <Stack
        direction="row"
        width="50%"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <img
          src="/images/books-blue.png"
          alt="Book Rent"
          width="40"
          height="40"
        />
        <Typography fontSize={24}>Book Rent</Typography>
      </Stack>
      <Typography px={2} fontSize={24}>
        Login
      </Typography>
      <Divider sx={{ marginBottom: 2 }} variant="middle" />
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
      <SnackBarWrapper  open={!!error || severity ==="success"} message={message} severity = {severity as "error" | "success" | "info" | "warning"}/>
    </Box>
  );
}
