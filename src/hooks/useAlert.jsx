import { useState } from "react";

export const useAlert = () => {
    const [alertMessage, setAlertMessage] = useState("");
    const [alertOpen, setAlertOpen] = useState(false);

    // Function to show the alert with a given message
    const showAlert = (message) => {
        setAlertMessage(message);
        setAlertOpen(true);
    };

    const closeAlert = () => setAlertOpen(false);

    return {
        alertMessage,
        alertOpen,
        showAlert,
        closeAlert,
    };
};
