import { useEffect } from "react";

export const useVesselDetailsUpdater = (
    currentVessel,
    simulatedTrail,
    setClickedVesselData,
    showDetailsPanel
) => {
    // Effect to update clicked vessel data when the details panel is open
    useEffect(() => {
        if (showDetailsPanel) {
            const updateClickedVesselData = () => {
                const latestPoint = simulatedTrail[simulatedTrail.length - 1];
                setClickedVesselData((prevData) => {
                    if (prevData && prevData.IMO === currentVessel.IMO) {
                        return { ...currentVessel, ...latestPoint };
                    }
                    return prevData;
                });
            };
            updateClickedVesselData();
        }
    }, [currentVessel, simulatedTrail, setClickedVesselData, showDetailsPanel]);
};
