import { useEffect } from "react";
import { Style, Icon } from "ol/style";
import { directionToDegrees } from "../../utils/directionUtils";
import { getScaleForZoom } from "../../utils/zoomUtils";
import {
    createPointFeature,
    updateFeatureScaleOnZoom,
} from "../../utils/featureUtils";
import PositionIcon from "../../assets/PositionIcon.svg";

const PositionMarkers = ({ singleVesselMovementData, vectorSource, map }) => {
    useEffect(() => {
        const { lat, lon, timestamp, speed, direction } =
            singleVesselMovementData;
        const degrees = directionToDegrees(direction);

        // Create the feature using the utility function
        const pointFeature = createPointFeature(lat, lon, {
            vesselInfo: { lat, lon, timestamp, speed, direction },
        });

        const iconStyle = new Style({
            image: new Icon({
                src: PositionIcon,
                rotation: (degrees * Math.PI) / 180,
                scale: getScaleForZoom(map.getView().getZoom(), "marker"),
                anchor: [0.5, 0.5],
            }),
        });

        pointFeature.setStyle(iconStyle);
        vectorSource.addFeature(pointFeature);

        // Handle zoom-based scaling using the utility function
        const cleanupZoomListener = updateFeatureScaleOnZoom(
            map,
            pointFeature,
            "marker"
        );

        // Clean up on component unmount
        return () => {
            vectorSource.removeFeature(pointFeature);
            cleanupZoomListener();
        };
    }, [singleVesselMovementData, vectorSource, map]);
    return null;
};

export default PositionMarkers;
