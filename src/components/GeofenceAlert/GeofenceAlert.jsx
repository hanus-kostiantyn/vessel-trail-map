import { Snackbar, Alert } from "@mui/material";
import { styles } from "./GeofenceAlert.styles";

const GeofenceAlert = ({ open, message, onClose }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000} // Closes after 6 seconds
            onClose={onClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            sx={styles.snackbar}
        >
            <Alert
                onClose={onClose}
                severity="error"
                variant="filled"
                sx={styles.alert}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default GeofenceAlert;
