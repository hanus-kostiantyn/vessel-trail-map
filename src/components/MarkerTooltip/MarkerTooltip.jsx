import { formatTimestamp } from "../../utils/dateUtils";
import "./MarkerTooltip.styles.css";

const MarkerTooltip = ({
    timestamp,
    speed,
    direction,
    isVisible,
    position,
}) => {
    if (!isVisible) return null;
    return (
        <div
            className="marker-tooltip"
            style={{ top: position[1], left: position[0] + 15 }}
        >
            <h3>Performance Info</h3>
            <p>Timestamp: {formatTimestamp(timestamp)}</p>
            <p>Speed: {speed} knots</p>
            <p>Direction: {direction}</p>
        </div>
    );
};

export default MarkerTooltip;
