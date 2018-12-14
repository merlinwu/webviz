//  Copyright (c) 2018-present, GM Cruise LLC
//
//  This source code is licensed under the Apache License, Version 2.0,
//  found in the LICENSE file in the root directory of this source tree.
//  You may not use this file except in compliance with the License.

import BasicExample from "./1.1.BasicExample.mdx";
import Composition from "./1.2.Composition.mdx";
import DynamicCommands from "./1.3.DynamicCommands.mdx";
import Interactivity from "./1.4.Interactivity.mdx";
import QuickStart from "./2.1.QuickStart.mdx";
import Worldview from "./3.1.Worldview.mdx";
import Lines from "./3.10.Lines.mdx";
import Overlay from "./3.11.Overlay.mdx";
import Points from "./3.12.Points.mdx";
import Spheres from "./3.13.Spheres.mdx";
import Text from "./3.14.Text.mdx";
import Triangles from "./3.15.Triangles.mdx";
import Camera from "./3.2.Camera.mdx";
import Command from "./3.3.Command.mdx";
import Arrows from "./3.4.Arrows.mdx";
import Cones from "./3.5.Cones.mdx";
import Cubes from "./3.6.Cubes.mdx";
import Cylinders from "./3.7.Cylinders.mdx";
import FilledPolygons from "./3.8.FilledPolygons.mdx";

export const componentList = {
  BasicExample,
  Composition,
  DynamicCommands,
  Interactivity,
  QuickStart,
  Worldview,
  Camera,
  Command,
  Arrows,
  Cones,
  Cubes,
  Cylinders,
  FilledPolygons,
  Lines,
  Overlay,
  Points,
  Spheres,
  Text,
  Triangles,
};

const ROUTE_CONFIG = [
  {
    name: "Examples",
    subRouteNames: ["Basic Example", "Composition", "Dynamic Commands", "Interactivity"],
  },
  { name: "Guides", subRouteNames: ["Quick Start"] },
  {
    name: "API",
    subRouteNames: [
      "Worldview",
      "Camera",
      "Command",
      "Arrows",
      "Cones",
      "Cubes",
      "Cylinders",
      "FilledPolygons",
      "Lines",
      "Overlay",
      "Points",
      "Spheres",
      "Text",
      "Triangles",
    ],
  },
];

// convert route names to component names, e.g. 'Quick Start' => 'QuickStart'
function getComponentName(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    // or if (/\s+/.test(match)) for white spaces
    if (+match === 0) {
      return "";
    }
    return match.toUpperCase();
  });
}

export default ROUTE_CONFIG.map(({ name, subRouteNames }) => {
  const componentName = getComponentName(name);
  return {
    path: `/${componentName}`,
    name: componentName,
    exact: true,
    subRoutes: subRouteNames.map((subRouteName, idx) => {
      const subComponentName = getComponentName(subRouteName);
      return {
        exact: idx !== 0,
        path: `/${subComponentName}`,
        name: subRouteName,
        main: subComponentName,
      };
    }),
  };
});