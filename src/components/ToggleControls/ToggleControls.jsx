import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { formatTimestamp } from "../../utils/dateUtils";
import "./ToggleControls.styles.css";

const ToggleControls = ({
    layersVisibility,
    toggleLayersVisibility,
    currentTimestamp,
}) => {
    const layerToggles = [
        { key: "vessel", label: "Show Vessel Icon" },
        { key: "markers", label: "Show Position Markers" },
        { key: "path", label: "Show Vessel Trail" },
    ];

    return (
        <div className="toggle-controls">
            {layerToggles.map(({ key, label }) => (
                <ToggleSwitch
                    key={key}
                    label={label}
                    isChecked={layersVisibility[key]}
                    onToggle={() => toggleLayersVisibility(key)}
                />
            ))}
            <div className="timestamp-display">
                <div className="timestamp-label">Current Vessel Timestamp:</div>
                <div className="timestamp-value">
                    {formatTimestamp(currentTimestamp)}
                </div>
            </div>
        </div>
    );
};

export default ToggleControls;
