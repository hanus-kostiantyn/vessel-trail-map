import { useEffect } from "react";
import { Style, Icon } from "ol/style";
import { directionToDegrees } from "../../utils/directionUtils";
import { getScaleForZoom } from "../../utils/zoomUtils";
import {
    createPointFeature,
    updateFeatureScaleOnZoom,
} from "../../utils/featureUtils";
import VesselIcon from "../../assets/VesselIcon.svg";

const VesselMarker = ({ singleVesselMovementData, vectorSource, map }) => {
    useEffect(() => {
        const { lat, lon, direction } = singleVesselMovementData;
        const degrees = directionToDegrees(direction);

        // Create the feature using the utility function
        const vesselFeature = createPointFeature(lat, lon);

        const iconStyle = new Style({
            image: new Icon({
                src: VesselIcon,
                rotation: (degrees * Math.PI) / 180, // Rotate the icon based on direction
                scale: getScaleForZoom(map.getView().getZoom(), "marker"),
                anchor: [0.5, 0.8],
            }),
        });

        vesselFeature.setStyle(iconStyle);
        vectorSource.addFeature(vesselFeature);

        // Handle zoom-based scaling using the utility function
        const cleanupZoomListener = updateFeatureScaleOnZoom(
            map,
            vesselFeature,
            "marker"
        );

        // Clean up on component unmount
        return () => {
            vectorSource.removeFeature(vesselFeature);
            cleanupZoomListener();
        };
    }, [singleVesselMovementData, vectorSource, map]);

    return null;
};

export default VesselMarker;
