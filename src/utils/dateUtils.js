export const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return (
        date.toLocaleString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZone: "UTC",
            hour12: false,
        }) + " UTC"
    );
};
