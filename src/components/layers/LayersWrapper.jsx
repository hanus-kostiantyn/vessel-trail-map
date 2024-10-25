import PositionPath from "./PositionPath";
import PositionMarkers from "./PositionMarkers";
import VesselMarker from "./VesselMarker";

const LayersWrapper = ({
    layersVisibility,
    vesselMovementData,
    vectorSource,
    map,
    singleVesselMovementData,
}) => {
    const renderPositionPath = () =>
        layersVisibility.path && (
            <PositionPath
                vesselMovementData={vesselMovementData}
                vectorSource={vectorSource}
                map={map}
            />
        );

    const renderPositionMarkers = () =>
        layersVisibility.markers &&
        vesselMovementData.map((position, index) => (
            <PositionMarkers
                key={index}
                singleVesselMovementData={position}
                vectorSource={vectorSource}
                map={map}
            />
        ));

    const renderVesselMarker = () =>
        layersVisibility.vessel && (
            <VesselMarker
                singleVesselMovementData={singleVesselMovementData}
                vectorSource={vectorSource}
                map={map}
            />
        );
    return (
        <>
            {renderPositionPath()}
            {renderPositionMarkers()}
            {renderVesselMarker()}
        </>
    );
};

export default LayersWrapper;
