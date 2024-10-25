# Vessel Trail Map with OpenLayers and React

This project demonstrates a vessel trail application using React and OpenLayers, meeting the requirements for vessel path visualization, interactivity, and map overlays. The code is designed for modularity and flexibility, facilitating easy expansion and maintenance.

## Technologies Used

-   React for UI structure and component handling.
-   OpenLayers for mapping, interactive overlays, and handling geospatial data.
-   Vite as the build tool for a faster development and optimized production setup.
-   JavaScript, CSS and HTML for data handling and styling.

## Key Features

-   #### Vessel Trail Path

    The Vessel Trail Path displays the route of the vessel based on historical data points, forming a continuous line on the map to illustrate the vessel's travel path. This path is automatically updated as new coordinates are added, providing a clear visualization of movement across time.

-   #### Vessel Positions

    Individual positions along the vessel's route are represented by markers. Each marker represents a data point in the vessel's journey, complete with information such as timestamp, speed, and direction. These markers are interactive, allowing users to hover or click for additional functionalities (see "Hover and Click Technology").

-   #### Vessel Marker
    The Vessel Marker displays the vessel’s current position, which can be moved along the path by clicking on different position markers. When clicked, the vessel marker updates to the selected location, reflecting the new timestamp and allowing for an interactive exploration of the vessel’s historical positions.

## Interactivity

-   #### Hover Technology (Tooltip on Position Markers)

    When the user hovers over any position marker, a tooltip is displayed, showing key data points like timestamp, speed, and direction. The tooltip technology uses an OpenLayers event listener to detect pointer movement over specific markers, dynamically updating the tooltip based on the hovered marker’s data.

-   #### Click Technology (Vessel Icon Movement)
    When a position marker is clicked, the Vessel Marker automatically moves to that position, with the timestamp updating to reflect the selected data point. This click functionality uses a single event listener for seamless integration with all markers and ensures that both the vessel icon and timestamp update based on user interactions.

## Toggle Controls

The map features toggle controls to manage the visibility of three main elements:

-   #### Vessel Icon:
    Toggles the vessel marker on and off. When disabled, the vessel icon cannot be moved to a new position marker, and the timestamp remains unchanged, freezing the current display.
-   #### Position Path:
    Toggles the visibility of the vessel's path trail, allowing users to focus on other map elements or view the entire route.
-   #### Position Markers:
    Enables or disables visibility of individual position markers along the vessel’s route.

The toggle controls provide full customization of the map view, allowing users to adjust the visibility of each element according to their needs.

# Running the Project

#### Prerequisites

Node.js 14+ installed on your local environment.

#### Setup and Installation

1. Clone the repository:
   git clone https://github.com/hanus-kostiantyn/vessel-trail-map.git
2. Navigate into the project directory:
   cd vessel-trail-map
3. Install dependencies:
   npm install
4. Start the development server:
   npm start
5. Access the application at http://localhost:5173.

#### Building for Production

1. To generate a production-ready build:
   npm build
