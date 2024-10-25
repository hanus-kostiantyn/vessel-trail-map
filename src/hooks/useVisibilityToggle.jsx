import { useState } from "react";

export const useVisibilityToggle = (initialVisibility = true) => {
    const [layersVisibility, setLayersVisibility] = useState({
        markers: initialVisibility,
        path: initialVisibility,
        vessel: initialVisibility,
    });

    const toggleLayersVisibility = (layer) => {
        setLayersVisibility((prevVisibility) => ({
            ...prevVisibility,
            [layer]: !prevVisibility[layer],
        }));
    };

    return { layersVisibility, setLayersVisibility, toggleLayersVisibility };
};
