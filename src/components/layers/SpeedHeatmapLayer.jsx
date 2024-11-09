import { useEffect } from "react";
import {
    createPointFeature,
    updateFeatureScaleOnZoom,
} from "../../utils/featureUtils";
import { applyScaleToHeatmapLayer } from "../../utils/zoomUtils";
import { weightForSpeed } from "../../utils/weightForSpeedUtils";

const SpeedHeatmapLayer = ({
    vesselMovementData,
    heatmapSource,
    heatmapLayer,
    map,
}) => {
    useEffect(() => {
        // Create features from vessel movement data
        const heatmapFeatures = vesselMovementData.map(
            (singleVesselMovementData) => {
                const { lat, lon, speed } = singleVesselMovementData;
                const heatmapSingleFeature = createPointFeature(
                    lat,
                    lon,
                    speed
                );

                // Set weight based on speed
                heatmapSingleFeature.set("weight", weightForSpeed(speed));
                return heatmapSingleFeature;
            }
        );

        // Add all heatmap features to the dedicated vector source
        heatmapSource.addFeatures(heatmapFeatures);

        // Update the heatmap layer scaling based on zoom
        applyScaleToHeatmapLayer(heatmapLayer, map.getView().getZoom());

        // Add listener for zoom changes
        const cleanupZoomListener = updateFeatureScaleOnZoom(map, heatmapLayer);

        return () => {
            heatmapFeatures.forEach((feature) =>
                heatmapSource.removeFeature(feature)
            );
            cleanupZoomListener();
        };
    }, [vesselMovementData, heatmapSource]);

    return null;
};

export default SpeedHeatmapLayer;
