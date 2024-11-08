import PositionPath from "./PositionPath";
import PositionMarkers from "./PositionMarkers";
import VesselMarker from "./VesselMarker";
import SpeedHeatmapLayer from "./SpeedHeatmapLayer";

const LayersWrapper = ({
    layersVisibility,
    vessel,
    vesselMovementData,
    vectorSource,
    map,
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
        vesselMovementData.map((singleVesselMovementData, index) => (
            <PositionMarkers
                key={index}
                singleVesselMovementData={singleVesselMovementData}
                vessel={vessel}
                vectorSource={vectorSource}
                map={map}
            />
        ));

    const renderVesselMarker = () =>
        layersVisibility.vessel && (
            <VesselMarker
                singleVesselMovementData={
                    vesselMovementData[vesselMovementData.length - 1]
                }
                vessel={vessel}
                vectorSource={vectorSource}
                map={map}
            />
        );

    const renderSpeedHeatmapLayer = () =>
        layersVisibility.heatmap && (
            <SpeedHeatmapLayer
                vesselMovementData={vesselMovementData}
                map={map}
            />
        );

    return (
        <>
            {renderPositionPath()}
            {renderPositionMarkers()}
            {renderVesselMarker()}
            {renderSpeedHeatmapLayer()}
        </>
    );
};

export default LayersWrapper;
