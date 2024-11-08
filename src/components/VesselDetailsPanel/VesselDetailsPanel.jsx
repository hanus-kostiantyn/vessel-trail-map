import { Paper, Typography, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./VesselDetailsPanel.styles";
import { formatTimestamp } from "../../utils/dateUtils";

const VesselDetailsPanel = ({ vessel, onClose }) => (
    <Paper elevation={3} sx={styles.container}>
        <Box sx={styles.header}>
            <Typography sx={styles.vesselName}>{vessel.name}</Typography>
            <IconButton onClick={onClose} sx={styles.iconButton} size="small">
                <CloseIcon fontSize="small" />
            </IconButton>
        </Box>

        <Box sx={styles.contentWrapper}>
            <Box sx={styles.infoRow}>
                <Box sx={styles.infoColumn}>
                    <Typography variant="body2" sx={styles.label}>
                        Type:
                    </Typography>
                    <Typography variant="body2" sx={styles.value}>
                        {vessel.type}
                    </Typography>
                </Box>
                <Box sx={styles.infoColumn}>
                    <Typography variant="body2" sx={styles.label}>
                        IMO:
                    </Typography>
                    <Typography variant="body2" sx={styles.value}>
                        {vessel.IMO}
                    </Typography>
                </Box>
            </Box>

            <Box sx={styles.infoRow}>
                <Box sx={styles.infoColumn}>
                    <Typography variant="body2" sx={styles.label}>
                        Speed:
                    </Typography>
                    <Typography variant="body2" sx={styles.value}>
                        {vessel.speed} knots
                    </Typography>
                </Box>
                <Box sx={styles.infoColumn}>
                    <Typography variant="body2" sx={styles.label}>
                        Course:
                    </Typography>
                    <Typography variant="body2" sx={styles.value}>
                        {vessel.direction}
                    </Typography>
                </Box>
            </Box>

            <Box sx={styles.lastInfoRow}>
                <Box>
                    <Typography variant="body2" sx={styles.label}>
                        Timestamp:
                    </Typography>
                    <Typography variant="body2" sx={styles.value}>
                        {formatTimestamp(vessel.timestamp)}
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Paper>
);

export default VesselDetailsPanel;
