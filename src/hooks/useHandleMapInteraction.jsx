import { useEffect } from "react";

export const useHandleMapInteraction = (
    map,
    showDetailsPanel,
    setShowDetailsPanel,
    setClickedVesselData
) => {
    useEffect(() => {
        if (!map) return; // If map is not ready, don't attach listeners

        const handleMapClick = (event) => {
            map.forEachFeatureAtPixel(event.pixel, (feature) => {
                if (!showDetailsPanel) {
                    const vesselInfo = feature.get("vesselInfo");
                    if (vesselInfo) {
                        setClickedVesselData(vesselInfo);
                        setShowDetailsPanel(true); // Show the details panel when a vessel / marker is clicked
                    }
                }
            });
        };

        map.on("singleclick", handleMapClick);

        return () => {
            map.un("singleclick", handleMapClick);
        };
    }, [map, showDetailsPanel, setShowDetailsPanel, setClickedVesselData]);
};
