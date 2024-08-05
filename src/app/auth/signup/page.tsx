"use client";

import { useTheme } from "@emotion/react";
import { Divider } from '@mui/material';
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Link,
  FormGroup,
  FormControl,
} from "@mui/material";
import React from "react";

const styles = (theme: any) => ({
  textField: {
    fontSize: "10px",
    padding: "8px",
    marginBottom: "8px",
  },
});

export default function Signup() {
  const theme = useTheme();
  const classes = styles(theme);

  return (
    <div
      style={{
        width: "70%",
        margin: "auto",
        alignSelf: "center",
        justifySelf: "center",
      }}
    >
      <div className='tw-flex tw-gap-4 tw-mt-12 tw-items-center'>
        <img
          src="/images/books-blue.png"
          alt="Book Rent"
          style={{ width: "40px", height: "40px" }}
        />
      <Typography
        style={{ fontWeight: "bold", color:"black" }}
      >
        Book Rent
      </Typography>
      </div>
      <Typography className="tw-mt-4" 
        style={{color:"black"}}
      >
        Signup into Book Rent
      </Typography>
      <Divider className="tw-mb-8" />
      <FormGroup>
        <FormControl fullWidth style={{ marginBottom: "8px" }}>
          <TextField
            id="email"
            size="small"
            margin="none"
            label="Email Address"
            variant="outlined"
            fullWidth
          />
        </FormControl>
        <FormControl fullWidth style={{ marginBottom: "8px" }}>
          <TextField
            id="password"
            size="small"
            margin="none"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
          />
        </FormControl>
        <FormControl fullWidth style={{ marginBottom: "8px" }}>
          <TextField
            id="confirm-password"
            label="Confirm Password"
            size="small"
            margin="none"
            variant="outlined"
            type="password"
            fullWidth
          />
        </FormControl>

        <FormControl fullWidth style={{ marginBottom: "8px" }}>
          <TextField
            id="location"
            label="Location"
            size="small"
            margin="none"
            variant="outlined"
            fullWidth
          />
        </FormControl>

        <FormControl fullWidth style={{ marginBottom: "8px" }}>
          <TextField
            id="phone-number"
            label="Phone Number"
            size="small"
            margin="none"
            variant="outlined"
            fullWidth
          />
        </FormControl>
        <FormControl>
          <FormControlLabel className="tw-text-sm tw-text-black"
          required
            control={<Checkbox id="terms" color="primary" />}
            label="I accept the Terms and Conditions"
          />
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          fullWidth
        >
          SIGN UP
        </Button>

        <Typography
          variant="body2"
          align="center"
          style={{ marginTop: "8px", color: "#4a5568" }}
        >
          Already have an account?{" "}
          <Link href="#" color="primary" underline="hover">
            Login
          </Link>
        </Typography>
      </FormGroup>
    </div>
  );
}
