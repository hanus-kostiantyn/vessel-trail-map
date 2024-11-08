import { useEffect } from "react";
import { geofencingZonesData } from "../data/geofencingZonesData";
import { Polygon } from "ol/geom";

export const useGeofencingAlert = (vesselTrail, alertCallback) => {
    useEffect(() => {
        if (!vesselTrail.length) return;

        // Get the current vessel position (last point in trail)
        const { lat, lon } = vesselTrail[vesselTrail.length - 1];

        // Check if this position falls within any geofencing zone
        geofencingZonesData.geofencingZones.forEach((zone) => {
            const zonePolygon = new Polygon([
                zone.coordinates.map((coord) => [coord.lon, coord.lat]),
            ]);

            // Check if the current position is within this zone's polygon
            if (zonePolygon.intersectsCoordinate([lon, lat])) {
                alertCallback(zone.warningMessage); // Trigger alert with the warning message
            }
        });
    }, [vesselTrail, alertCallback]);
};
