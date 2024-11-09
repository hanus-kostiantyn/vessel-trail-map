import { Feature } from "ol";
import { Point, LineString } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { applyScaleToFeature, applyScaleToHeatmapLayer } from "./zoomUtils";

// Create a point feature with lat/lon data and additional info
export const createPointFeature = (lat, lon, additionalInfo = {}) => {
    return new Feature({
        geometry: new Point(fromLonLat([lon, lat])),
        ...additionalInfo,
    });
};

// Create a linestring feature with lat/lon data array and additional info
export const createLinestringFeature = (
    coordinatesArray,
    additionalInfo = {}
) => {
    const transformedCoordinates = coordinatesArray.map((coord) =>
        fromLonLat(coord)
    );

    return new Feature({
        geometry: new LineString(transformedCoordinates),
        ...additionalInfo,
    });
};

// Handle zoom changes and scale application
export const updateFeatureScaleOnZoom = (map, feature, styleType) => {
    const updateScaleOnZoom = () => {
        const zoom = map.getView().getZoom();
        if (styleType) {
            const style = feature.getStyle();
            applyScaleToFeature(feature, zoom, style, styleType);
        } else {
            applyScaleToHeatmapLayer(feature, zoom);
        }
    };

    // Attach zoom event listener
    map.getView().on("change:resolution", updateScaleOnZoom);

    // Cleanup
    return () => {
        map.getView().un("change:resolution", updateScaleOnZoom);
    };
};
