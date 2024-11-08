export const geofencingZonesData = {
    geofencingZones: [
        {
            name: "Restricted Zone",
            coordinates: [
                { lat: 25.335987, lon: 55.340249 },
                { lat: 25.375987, lon: 55.390249 },
                { lat: 25.355987, lon: 55.370249 },
            ],
            warningMessage: "Entering restricted area!",
        },
        {
            name: "High Traffic Area",
            coordinates: [
                { lat: 25.276987, lon: 55.296249 },
                { lat: 25.285987, lon: 55.302249 },
                { lat: 25.315987, lon: 55.330249 },
            ],
            warningMessage: "High traffic zone, proceed with caution.",
        },
    ],
};
