import { useEffect } from "react";
import { Style, Stroke } from "ol/style";
import { getScaleForZoom } from "../../utils/zoomUtils";
import {
    updateFeatureScaleOnZoom,
    createLinestringFeature,
} from "../../utils/featureUtils";

const PositionPath = ({ vesselMovementData, vectorSource, map }) => {
    useEffect(() => {
        const coordinatesArray = vesselMovementData.map(({ lat, lon }) => [
            lon,
            lat,
        ]);

        // Create the feature using the utility function
        const pathFeature = createLinestringFeature(coordinatesArray);

        const pathStyle = new Style({
            stroke: new Stroke({
                color: "rgba(0, 0, 255, 0.3)",
                width: getScaleForZoom(map.getView().getZoom(), "path"),
            }),
            zIndex: 5,
        });

        pathFeature.setStyle(pathStyle);
        vectorSource.addFeature(pathFeature);

        // Handle zoom-based scaling using the utility function
        const cleanupZoomListener = updateFeatureScaleOnZoom(
            map,
            pathFeature,
            "path"
        );

        // Clean up on component unmount
        return () => {
            vectorSource.removeFeature(pathFeature);
            cleanupZoomListener();
        };
    }, [vesselMovementData, vectorSource, map]);

    return null;
};

export default PositionPath;
