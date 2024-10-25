import { useState, useEffect } from "react";

export const useHandleMapInteraction = (
    map,
    initialPosition,
    initialTimestamp,
    setLayersVisibility
) => {
    const [singleVesselMovementData, setSingleVesselMovementData] =
        useState(initialPosition);
    const [currentTimestamp, setCurrentTimestamp] = useState(initialTimestamp);

    // Set up the click handler for the map
    useEffect(() => {
        if (!map) return; // If map is not ready, don't attach listeners

        const handleMapClick = (event) => {
            map.forEachFeatureAtPixel(event.pixel, (feature) => {
                const vesselInfo = feature.get("vesselInfo"); // Get vessel info from feature
                vesselInfo &&
                    setLayersVisibility((prevLayersVisibility) => {
                        if (prevLayersVisibility.vessel) {
                            setSingleVesselMovementData(vesselInfo);
                            setCurrentTimestamp(vesselInfo.timestamp);
                        }
                        return prevLayersVisibility;
                    });
            });
        };

        map.on("singleclick", handleMapClick);

        return () => {
            map.un("singleclick", handleMapClick);
        };
    }, [map]);

    return { singleVesselMovementData, currentTimestamp };
};
