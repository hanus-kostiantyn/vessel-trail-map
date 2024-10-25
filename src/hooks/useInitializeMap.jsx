import { useEffect, useState } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";

export const useInitializeMap = (vectorSource) => {
    const [map, setMap] = useState(null);

    useEffect(() => {
        const mapInstance = new Map({
            target: "map",
            layers: [
                new TileLayer({ source: new OSM() }),
                new VectorLayer({ source: vectorSource }),
            ],
            view: new View({ center: [0, 0], zoom: 2 }),
        });
        setMap(mapInstance);

        return () => {
            mapInstance.setTarget(null);
        };
    }, [vectorSource]);

    return map;
};
