import {
    Paper,
    Box,
    Typography,
    FormControl,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import { formatTimestamp } from "../../utils/dateUtils";
import styles from "./ToggleControls.styles";

const ToggleControls = ({
    layersVisibility,
    toggleLayersVisibility,
    currentTimestamp,
    vessels,
    selectedVesselIndex,
    onSelectVessel,
}) => {
    const layerToggles = [
        { key: "vessel", label: "Show Vessel Icon" },
        { key: "markers", label: "Show Position Markers" },
        { key: "path", label: "Show Vessel Trail" },
        { key: "heatmap", label: "Show Heatmap" },
    ];

    return (
        <Paper elevation={3} sx={styles.container}>
            <Box sx={styles.selectWrapper}>
                <FormControl sx={styles.formControl}>
                    <Select
                        value={selectedVesselIndex}
                        onChange={(e) => onSelectVessel(e.target.value)}
                        sx={styles.select}
                        MenuProps={styles.menuProps}
                    >
                        {vessels.map((vessel, index) => (
                            <MenuItem
                                key={vessel.IMO}
                                value={index}
                                sx={styles.menuItem}
                            >
                                {vessel.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Box sx={styles.contentWrapper}>
                <Box sx={styles.checkboxWrapper}>
                    {layerToggles.map(({ key, label }) => (
                        <FormControlLabel
                            key={key}
                            control={
                                <Checkbox
                                    checked={layersVisibility[key]}
                                    onChange={() => toggleLayersVisibility(key)}
                                    sx={styles.checkbox}
                                />
                            }
                            label={
                                <Typography variant="body2" sx={styles.label}>
                                    {label}
                                </Typography>
                            }
                        />
                    ))}
                </Box>

                <Box sx={styles.timestampWrapper}>
                    <Typography variant="body2" sx={styles.timestampLabel}>
                        Current Vessel Timestamp:
                    </Typography>
                    <Typography variant="body2" sx={styles.timestampValue}>
                        {formatTimestamp(currentTimestamp)}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default ToggleControls;
