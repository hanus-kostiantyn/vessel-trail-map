const styles = {
    container: {
        padding: "0",
        width: "260px",
        position: "absolute",
        bottom: "22px",
        right: "5px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: "8px 8px 0 0",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        zIndex: "10",
    },
    select: {
        backgroundColor: "#4481e4",
        borderRadius: "8px 8px 0 0",
        color: "#fff",
        fontSize: "16px",
        fontWeight: 600,
        "& .MuiSelect-icon": {
            color: "#fff",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
    },
    formControl: {
        width: "100%",
    },
    menuItem: {
        padding: "8px 12px",
        backgroundColor: "#4481e4",
        color: "#fff",
        fontSize: "16px",
        fontWeight: 600,
        "&.Mui-selected": {
            backgroundColor: "#3367c1 !important",
        },
        "&.Mui-selected:hover": {
            backgroundColor: "#3367c1",
        },
        "&:hover": {
            backgroundColor: "#3367c1",
        },
    },
    menuProps: {
        MenuListProps: {
            sx: {
                padding: 0,
            },
        },
    },
    contentWrapper: {
        padding: "12px 16px",
    },
    checkboxWrapper: {
        borderTop: "1px solid rgba(0, 0, 0, 0.12)",
    },
    checkbox: {
        color: "#4481e4",
        "&.Mui-checked": {
            color: "#4481e4",
        },
    },
    label: {
        color: "#555",
        fontWeight: 600,
    },
    timestampWrapper: {
        borderTop: "1px solid rgba(0, 0, 0, 0.12)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        textAlign: "center",
        paddingTop: "8px",
    },
    timestampLabel: {
        color: "#4481e4",
        fontWeight: 600,
    },
    timestampValue: {
        color: "#555",
        fontWeight: 600,
        fontSize: "16px",
        marginTop: "4px",
    },
};

export default styles;
