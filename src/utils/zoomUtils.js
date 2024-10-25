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
