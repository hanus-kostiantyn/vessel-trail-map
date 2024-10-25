import MarkerTooltip from "../MarkerTooltip/MarkerTooltip";
import { getInitialTooltipData } from "../../utils/TooltipUtils";
import { useTooltip } from "../../hooks/useTooltip.jsx";
import { useFeatureHover } from "../../hooks/useFeatureHover.jsx";

const HoverHandler = ({ map, vectorSource }) => {
    const { tooltipData, updateTooltipData, resetTooltipData } = useTooltip(
        getInitialTooltipData()
    );

    // Pass the map and hover logic to the custom hook
    useFeatureHover(map, vectorSource, (event, vesselInfo) => {
        if (event && vesselInfo) {
            updateTooltipData(event, vesselInfo);
        } else {
            resetTooltipData();
        }
    });

    return <MarkerTooltip {...tooltipData} />;
};

export default HoverHandler;
