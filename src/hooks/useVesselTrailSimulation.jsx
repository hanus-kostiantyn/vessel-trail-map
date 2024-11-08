import { useState, useEffect, useCallback } from "react";
import { useCurrentVessel } from "./useCurrentVessel";

export const useVesselTrailSimulation = (
    vesselMovementData,
    selectedVesselIndex
) => {
    const currentVessel = useCurrentVessel(
        selectedVesselIndex,
        vesselMovementData
    );
    const [simulatedTrail, setSimulatedTrail] = useState([
        currentVessel.trail[0],
    ]);

    //Function to reset the trail when a new vessel is selected
    const resetTrail = useCallback(() => {
        setSimulatedTrail([currentVessel.trail[0]]);
    }, [currentVessel]);

    // Effect to simulate the trail movement
    useEffect(() => {
        resetTrail();
        let pointIndex = 1;
        const intervalId = setInterval(() => {
            if (pointIndex < currentVessel.trail.length) {
                const nextPoint = currentVessel.trail[pointIndex];
                setSimulatedTrail((prevTrail) => [...prevTrail, nextPoint]);
                pointIndex += 1;
            } else {
                clearInterval(intervalId);
            }
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentVessel]);

    return {
        currentVessel,
        simulatedTrail,
    };
};
