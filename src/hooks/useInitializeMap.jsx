import { useEffect, useState } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import { Heatmap as HeatmapLayer } from "ol/layer";
import VectorSource from "ol/source/Vector";
import { defaults, Zoom } from "ol/control";

// Initialize vector sources for markers (vessel, position marker & path) and heatmap
const vectorSource = new VectorSource();
const heatmapSource = new VectorSource();

export const useInitializeMap = () => {
    const [map, setMap] = useState(null);
    const [heatmapLayer, setHeatmapLayer] = useState(null);

    useEffect(() => {
        // Create vector custom layer
        const vectorCustomLayer = new VectorLayer({
            source: vectorSource,
            zIndex: 10,
        });

        // Create heatmap custom layer
        const heatmapCustomLayer = new HeatmapLayer({
            source: heatmapSource,
            zIndex: 5,
            gradient: ["green", "yellow", "orange", "red"],
        });

        setHeatmapLayer(heatmapCustomLayer);

        const mapInstance = new Map({
            target: "map",
            layers: [
                new TileLayer({ source: new OSM() }),
                vectorCustomLayer,
                heatmapCustomLayer,
            ],
            view: new View({ center: [0, 0], zoom: 2 }),
            controls: defaults({ zoom: false }).extend([
                new Zoom({
                    className: "custom-zoom",
                    target: document.getElementById("zoom-controls"),
                }),
            ]),
        });
        setMap(mapInstance);

        return () => {
            mapInstance.setTarget(null);
        };
    }, []);

    return { map, vectorSource, heatmapSource, heatmapLayer };
};
