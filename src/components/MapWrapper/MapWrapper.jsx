import { useState } from "react";
import VectorSource from "ol/source/Vector";
import { vesselMovementData } from "../../data/vesselMovementData";
import HoverHandler from "../HoverHandler/HoverHandler";
import ToggleControls from "../ToggleControls/ToggleControls";
import LayersWrapper from "../layers/LayersWrapper";
import { useInitializeMap } from "../../hooks/useInitializeMap";
import { useVisibilityToggle } from "../../hooks/useVisibilityToggle";
import { useHandleMapInteraction } from "../../hooks/useHandleMapInteraction";
import "ol/ol.css";
import "./MapWrapper.styles.css";

const MapWrapper = () => {
    const [vectorSource, setVectorSource] = useState(new VectorSource());
    const map = useInitializeMap(vectorSource);
    const initialSingleVesselMovementData = vesselMovementData[0];

    // State for toggling visibility
    const { layersVisibility, setLayersVisibility, toggleLayersVisibility } =
        useVisibilityToggle();

    // Use the custom hook for map interaction
    const { singleVesselMovementData, currentTimestamp } =
        useHandleMapInteraction(
            map,
            initialSingleVesselMovementData,
            initialSingleVesselMovementData.timestamp,
            setLayersVisibility
        );

    return (
        <div>
            <div id="map">
                {map && (
                    <>
                        <LayersWrapper
                            layersVisibility={layersVisibility}
                            vesselMovementData={vesselMovementData}
                            vectorSource={vectorSource}
                            map={map}
                            singleVesselMovementData={singleVesselMovementData}
                        />
                        <HoverHandler map={map} vectorSource={vectorSource} />
                        <ToggleControls
                            layersVisibility={layersVisibility}
                            toggleLayersVisibility={toggleLayersVisibility}
                            currentTimestamp={currentTimestamp}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default MapWrapper;
