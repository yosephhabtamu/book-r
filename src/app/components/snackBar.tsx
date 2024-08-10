import { Snackbar } from "@mui/material";

export default function SnackBarWrapper(props:{open:boolean, message: string, severity: "error" | "success" | "info" | "warning"}) { 
  return (
    <Snackbar
    anchorOrigin={{ vertical:"bottom" , horizontal:"center" }}
    open={props.open}
    autoHideDuration={3000}
    message={props.message}
    security={props.severity}
  />
  );
}   