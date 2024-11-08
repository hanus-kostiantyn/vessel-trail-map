import { useEffect } from "react";
import { Style, Icon } from "ol/style";
import { directionToDegrees } from "../../utils/directionUtils";
import { getScaleForZoom } from "../../utils/zoomUtils";
import {
    createPointFeature,
    updateFeatureScaleOnZoom,
} from "../../utils/featureUtils";
import PositionIcon from "../../assets/PositionIcon.svg";
import DepartureIcon from "../../assets/DepartureIcon.svg";
import ArrivalIcon from "../../assets/ArrivalIcon.svg";
import SpeedChangeIcon from "../../assets/SpeedChangeIcon.svg";
import EntryWarning from "../../assets/EntryWarning.svg";

const PositionMarkers = ({
    singleVesselMovementData,
    vessel,
    vectorSource,
    map,
}) => {
    useEffect(() => {
        const { lat, lon, direction, event } = singleVesselMovementData;
        const { name, type, IMO } = vessel;
        const degrees = directionToDegrees(direction);

        // Define a mapping for icons and rotation behavior
        const eventIcons = {
            "Port Arrival": { icon: ArrivalIcon, rotate: false },
            "Port Departure": { icon: DepartureIcon, rotate: false },
            "Speed Change": { icon: SpeedChangeIcon, rotate: true },
            "Restricted Zone Entry Warning": {
                icon: EntryWarning,
                rotate: true,
            },
        };

        // Set default icon and rotation
        const { icon, rotate } = eventIcons[event] || {
            icon: PositionIcon,
            rotate: true,
        };
        const selectedIcon = icon;
        const rotationAngle = rotate ? (degrees * Math.PI) / 180 : 0;

        // Create the feature using the utility function
        const pointFeature = createPointFeature(lat, lon, {
            vesselInfo: {
                name,
                type,
                IMO,
                ...singleVesselMovementData,
            },
        });

        const iconStyle = new Style({
            image: new Icon({
                src: selectedIcon,
                rotation: rotationAngle,
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
    }, [singleVesselMovementData, vessel, vectorSource, map]);
    return null;
};

export default PositionMarkers;
