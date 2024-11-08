import { useEffect } from "react";
import VectorSource from "ol/source/Vector";
import { Heatmap as HeatmapLayer } from "ol/layer";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { weightForSpeed } from "../../utils/weightForSpeedUtils";

const SpeedHeatmapLayer = ({ vesselMovementData, map }) => {
    useEffect(() => {
        if (!map) return;

        // Create features from vessel movement data
        const heatmapFeatures = vesselMovementData.map((point) => {
            const coord = fromLonLat([point.lon, point.lat]);
            const feature = new Feature({
                geometry: new Point(coord),
                speed: point.speed,
            });

            // Set weight based on speed
            feature.set("weight", weightForSpeed(point.speed));
            return feature;
        });

        // Create a Heatmap layer
        const heatmapLayer = new HeatmapLayer({
            source: new VectorSource({
                features: heatmapFeatures,
            }),
            blur: 15, // Adjust the blur for heatmap effect
            radius: 8, // Adjust the radius of each point
        });

        map.addLayer(heatmapLayer);

        return () => {
            map.removeLayer(heatmapLayer);
        };
    }, [vesselMovementData, map]);

    return null;
};

export default SpeedHeatmapLayer;
