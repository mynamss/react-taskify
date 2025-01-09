import { Snackbar, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

export default function CenterSnackbar({
  open = false,
  setOpen,
  message = "Berhasil",
}) {
  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <Snackbar
        color="secondary"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
        message={message}
        key={"top" + "center"}
        action={action}
      />
    </>
  );
}
