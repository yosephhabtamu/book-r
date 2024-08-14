"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Box,
  Modal,
  Typography,
  Autocomplete,
  SelectChangeEvent,
  Paper,
  Divider,
} from "@mui/material";
import HomePage from "../../page";
import { AddBookModal } from "./component/modal";

const books = ["Book 1", "Book 2", "Book 3"];

const UploadNewBook: React.FC = () => {
  const [book, setBook] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const [books, setBooks] = useState<string[]>([
    "fiction",
    "anwii",
    "test",
    "jeles",
  ]);

  const handleBookChange = (
    event: React.ChangeEvent<{}>,
    value: string | null
  ) => {
    setBook(value);
  };

  const formatQuantity = (e: React.KeyboardEvent) => {
    let checkIfNum;
    if (e.key !== undefined) {
      checkIfNum =
        e.key === "e" || e.key === "." || e.key === "+" || e.key === "-";
    }
    return checkIfNum && e.preventDefault();
  };
  const formatPrice = (e: React.KeyboardEvent) => {
    let checkIfNum;
    if (e.key !== undefined) {
      checkIfNum = e.key === "e" || e.key === "+" || e.key === "-";
    }
    return checkIfNum && e.preventDefault();
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(event.target.value);
    if (isNaN(quantity)) {
      setQuantity(0);
    } else {
      setQuantity(quantity);
    }
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleOpen = () => {
    console.log("it clicked")
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <HomePage path="Owner/upload">

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      <Autocomplete
        options={books}
        value={book}
        onChange={handleBookChange}
        fullWidth
        renderInput={(params) => {
          return (
            <>
            <TextField
              {...params}
              label="Search book by name or Author"
              variant="outlined"
              margin="normal"
              fullWidth
              color="primary"
            />
                      </>
          );
        }}
        PaperComponent={({ children }) => {
            return (
              <Paper>
                {children}
                <Divider variant="middle" color="primary" />
                <Button
                  color="primary"
                  fullWidth
                  sx={{ justifyContent: "flex-start", p: 2 }}
                  onMouseDown={handleOpen}
                >
                  + Add
                </Button>
              </Paper>
            );
          }}
      />

      <Box display="flex" width="100%" gap={3}>
        <TextField
          label="Book Quantity"
          value={quantity}
          onChange={handleQuantityChange}
          fullWidth
          variant="outlined"
          margin="normal"
          onKeyDown={formatQuantity}
          color="primary"
        />

        <TextField
          label="Rent price for 2 weeks"
          value={price}
          onChange={handlePriceChange}
          fullWidth
          variant="outlined"
          margin="normal"
          onKeyDown={formatPrice}
          color="primary"
        />
      </Box>

      <Button
        variant="outlined"
        component="label"
        sx={{
          marginTop: "1rem",
          color: "primary.main",
          borderColor: "primary.main",
        }}
      >
        Upload Book Cover
        <input type="file" hidden />
      </Button>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: "2rem" }}
      >
        Upload
      </Button>
      <AddBookModal open={open} handleClose={handleClose} />
    </Box>
    </HomePage>
  );
};

export default UploadNewBook;

type AutocompleteOption = string;
