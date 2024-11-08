import { useMemo } from "react";

export const useCurrentVessel = (selectedVesselIndex, vesselMovementData) => {
    const currentVessel = useMemo(() => {
        return vesselMovementData.vessels[selectedVesselIndex];
    }, [selectedVesselIndex, vesselMovementData]);

    return currentVessel;
};
