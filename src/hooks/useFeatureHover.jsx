import { useEffect, useRef } from "react";

export const useFeatureHover = (map, vectorSource, onFeatureHover) => {
    const previousFeatureId = useRef(null); // Use ref to store the previous feature ID

    useEffect(() => {
        if (!map) return;
        const mapHoverEventHandler = (event) => {
            const currentFeature = map.hasFeatureAtPixel(event.pixel)
                ? map.getFeaturesAtPixel(event.pixel)[0]
                : null;
            const currentFeatureId = currentFeature
                ? currentFeature.get("vesselInfo")?.timestamp
                : null;

            // Compare current feature ID with previous
            if (currentFeatureId !== previousFeatureId.current) {
                const vesselInfo = currentFeature?.get("vesselInfo");
                onFeatureHover(event, vesselInfo || null);

                // Update the ref with the current feature ID
                previousFeatureId.current = currentFeatureId;
            }
        };

        map.on("pointermove", mapHoverEventHandler);

        return () => {
            if (map) {
                map.un("pointermove", mapHoverEventHandler);
            }
        };
    }, [map, vectorSource, onFeatureHover]);
};
