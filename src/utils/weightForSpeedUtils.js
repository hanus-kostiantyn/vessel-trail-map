export const weightForSpeed = (speed) => {
    switch (true) {
        case speed <= 8:
            return 0.2; // Low weight for slow speed
        case speed <= 12:
            return 0.5; // Moderate weight
        case speed <= 16:
            return 0.8; // High weight
        default:
            return 1.0; // Max weight for very high speed
    }
};
