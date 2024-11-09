export const getScaleForZoom = (zoomLevel, type) => {
    switch (true) {
        case zoomLevel >= 14:
            return type === "marker" ? 0.9 : 35.0;
        case zoomLevel >= 12:
            return type === "marker" ? 0.7 : 25.0;
        case zoomLevel >= 10:
            return type === "marker" ? 0.6 : 20.0;
        case zoomLevel >= 8:
            return type === "marker" ? 0.5 : 17.0;
        case zoomLevel >= 6:
            return type === "marker" ? 0.4 : 14.0;
        case zoomLevel >= 4:
            return type === "marker" ? 0.3 : 11.0;
        default:
            return type === "marker" ? 0.2 : 8.5;
    }
};

export const getHeatmapScaleForZoom = (zoomLevel) => {
    switch (true) {
        case zoomLevel >= 14:
            return { blur: 11, radius: 16 };
        case zoomLevel >= 12:
            return { blur: 8, radius: 12 };
        case zoomLevel >= 10:
            return { blur: 6, radius: 9 };
        case zoomLevel >= 8:
            return { blur: 5, radius: 7 };
        case zoomLevel >= 6:
            return { blur: 4, radius: 5 };
        case zoomLevel >= 4:
            return { blur: 3, radius: 4 };
        default:
            return { blur: 2, radius: 2 };
    }
};

export const applyScaleToFeature = (feature, zoomLevel, style, type) => {
    const scale = getScaleForZoom(zoomLevel, type); // Get scale based on zoom level

    // Check if the style is for an icon (e.g., PositionMarker & VesselMarker)
    if (style.getImage && style.getImage()) {
        style.getImage().setScale(scale); // Apply scale to image (icon for markers)
    }

    // Check if the style is for a stroke (e.g., PositionPath)
    if (style.getStroke && style.getStroke()) {
        style.getStroke().setWidth(scale); // Apply scale to stroke width (for paths)
    }
    feature.setStyle(style); // Update the feature with the new style
};

export const applyScaleToHeatmapLayer = (layer, zoomLevel) => {
    const { blur, radius } = getHeatmapScaleForZoom(zoomLevel);
    layer.setBlur(blur);
    layer.setRadius(radius);
};
