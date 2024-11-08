import { useState } from "react";
import VectorSource from "ol/source/Vector";
import { vesselMovementData } from "../../data/vesselMovementData";
import HoverHandler from "../HoverHandler/HoverHandler";
import ToggleControls from "../ToggleControls/ToggleControls";
import LayersWrapper from "../layers/LayersWrapper";
import VesselDetailsPanel from "../VesselDetailsPanel/VesselDetailsPanel";
import GeofenceAlert from "../GeofenceAlert/GeofenceAlert";
import { useInitializeMap } from "../../hooks/useInitializeMap";
import { useVisibilityToggle } from "../../hooks/useVisibilityToggle";
import { useHandleMapInteraction } from "../../hooks/useHandleMapInteraction";
import { useVesselTrailSimulation } from "../../hooks/useVesselTrailSimulation";
import { useGeofencingAlert } from "../../hooks/useGeofencingAlert";
import { useAlert } from "../../hooks/useAlert";
import { useVesselDetailsUpdater } from "../../hooks/useVesselDetailsUpdater";

import { Box } from "@mui/material";
import "ol/ol.css";
import styles from "./MapWrapper.styles";

const MapWrapper = () => {
    const [vectorSource, setVectorSource] = useState(new VectorSource());
    const map = useInitializeMap(vectorSource);

    const [selectedVesselIndex, setSelectedVesselIndex] = useState(0);
    const [clickedVesselData, setClickedVesselData] = useState(null);
    const [showDetailsPanel, setShowDetailsPanel] = useState(false);

    const { layersVisibility, toggleLayersVisibility } = useVisibilityToggle();

    const { currentVessel, simulatedTrail } = useVesselTrailSimulation(
        vesselMovementData,
        selectedVesselIndex
    );

    useHandleMapInteraction(
        map,
        showDetailsPanel,
        setShowDetailsPanel,
        setClickedVesselData
    );

    // Custom hook to dynamically update the vessel details panel when the details panel is open and timer is going on
    useVesselDetailsUpdater(
        currentVessel,
        simulatedTrail,
        setClickedVesselData,
        showDetailsPanel
    );

    const { alertMessage, alertOpen, showAlert, closeAlert } = useAlert();

    // Apply geofencing alert hook to monitor for zone entry
    useGeofencingAlert(simulatedTrail, (message) => showAlert(message));

    const handleSelectVessel = (index) => {
        setSelectedVesselIndex(index);
        setShowDetailsPanel(false);
    };

    return (
        <Box sx={styles.wrapper}>
            <Box id="map" sx={styles.mapContainer}>
                {map && (
                    <>
                        <LayersWrapper
                            layersVisibility={layersVisibility}
                            vessel={currentVessel}
                            vesselMovementData={simulatedTrail}
                            vectorSource={vectorSource}
                            map={map}
                        />
                        <HoverHandler map={map} vectorSource={vectorSource} />
                        <ToggleControls
                            layersVisibility={layersVisibility}
                            toggleLayersVisibility={toggleLayersVisibility}
                            currentTimestamp={
                                simulatedTrail[simulatedTrail.length - 1]
                                    ?.timestamp || ""
                            }
                            vessels={vesselMovementData.vessels}
                            selectedVesselIndex={selectedVesselIndex}
                            onSelectVessel={handleSelectVessel}
                        />
                    </>
                )}
                {showDetailsPanel && (
                    <VesselDetailsPanel
                        vessel={clickedVesselData}
                        onClose={() => setShowDetailsPanel(false)}
                    />
                )}
                <GeofenceAlert
                    open={alertOpen}
                    message={alertMessage}
                    onClose={closeAlert}
                />
                <Box id="zoom-controls" sx={styles.customZoom}></Box>
            </Box>
        </Box>
    );
};

export default MapWrapper;
