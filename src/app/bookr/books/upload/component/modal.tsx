import { Modal, Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { useEffect } from "react";


export function AddBookModal(props: Readonly<{open:boolean, handleClose:any}>){
    useEffect   (() => {
        console.log("AddBookModal mounted");
        return () => {
            console.log("AddBookModal unmounted");
        }
    }
    ,[])
    return ( <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Add Book
          </Typography>
          <TextField
            label="Book Name"
            fullWidth
            variant="outlined"
            margin="normal"
            color="primary"
          />
          <TextField
            label="Author Name"
            fullWidth
            variant="outlined"
            margin="normal"
            color="primary"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel color="primary">Category</InputLabel>
            <Select variant="outlined" color="primary">
              <MenuItem value="Category 1">Category 1</MenuItem>
              <MenuItem value="Category 2">Category 2</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" fullWidth sx={{ marginTop: '1rem' }}>
            Add
          </Button>
        </Box>
      </Modal>)
}