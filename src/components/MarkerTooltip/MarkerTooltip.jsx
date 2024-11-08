import { Paper, Box, Typography } from "@mui/material";
import { formatTimestamp } from "../../utils/dateUtils";
import styles from "./MarkerTooltip.styles";

const MarkerTooltip = ({
    timestamp,
    speed,
    direction,
    temperature,
    windSpeed,
    waveHeight,
    isVisible,
    position,
}) => {
    if (!isVisible) return null;

    return (
        <Paper
            elevation={3}
            sx={{
                ...styles.container,
                top: position[1] - 120,
                left: position[0] + 15,
            }}
        >
            <Box sx={styles.header}>
                <Typography sx={styles.sectionTitle}>
                    Performance Info
                </Typography>
            </Box>

            <Box sx={styles.contentWrapper}>
                <Box sx={styles.infoRow}>
                    <Typography variant="body2" sx={styles.label}>
                        Speed:
                    </Typography>
                    <Typography variant="body2" sx={styles.value}>
                        {speed} knots
                    </Typography>
                </Box>
                <Box sx={styles.infoRow}>
                    <Typography variant="body2" sx={styles.label}>
                        Course:
                    </Typography>
                    <Typography variant="body2" sx={styles.value}>
                        {direction}
                    </Typography>
                </Box>

                <Box sx={styles.lastInfoRow}>
                    <Typography variant="body2" sx={styles.label}>
                        Timestamp:
                    </Typography>
                    <Typography variant="body2" sx={styles.value}>
                        {formatTimestamp(timestamp)}
                    </Typography>
                </Box>
            </Box>

            <Box sx={styles.header}>
                <Typography sx={styles.sectionTitle}>Weather Info</Typography>
            </Box>
            <Box sx={styles.contentWrapper}>
                <Box sx={styles.infoRow}>
                    <Typography variant="body2" sx={styles.label}>
                        Temperature:
                    </Typography>
                    <Typography variant="body2" sx={styles.value}>
                        {temperature} °C
                    </Typography>
                </Box>
                <Box sx={styles.infoRow}>
                    <Typography variant="body2" sx={styles.label}>
                        Wind Speed:
                    </Typography>
                    <Typography variant="body2" sx={styles.value}>
                        {windSpeed} km/h
                    </Typography>
                </Box>
                <Box sx={styles.lastInfoRow}>
                    <Typography variant="body2" sx={styles.label}>
                        Wave Height:
                    </Typography>
                    <Typography variant="body2" sx={styles.value}>
                        {waveHeight} m
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default MarkerTooltip;
