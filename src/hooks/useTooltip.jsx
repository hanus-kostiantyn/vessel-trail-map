import { useState } from "react";

export const useTooltip = (initialTooltipData) => {
    const [tooltipData, setTooltipData] = useState(initialTooltipData);

    const updateTooltipData = (event, vesselInfo) => {
        const position = [event.pixel[0], event.pixel[1]];
        setTooltipData({
            isVisible: true,
            position,
            ...vesselInfo,
        });
    };

    const resetTooltipData = () => {
        setTooltipData(initialTooltipData);
    };

    return { tooltipData, updateTooltipData, resetTooltipData };
};
