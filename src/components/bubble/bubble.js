import {
  spline,
  pointsInPath,
} from "https://cdn.skypack.dev/@georgedoescode/generative-utils@1.0.1";
import SimplexNoise from "https://cdn.skypack.dev/simplex-noise@2.4.0";

function makeBubbleFluid(index, mouseover) {
  var pathSelect = document.querySelectorAll(`#bubble-path-${index}`);

  if (!(pathSelect.length === 0)) {
    const path = pathSelect[0];
    let hueNoiseOffset = 0;
    let noiseStep = 0.003;

    const simplex = new SimplexNoise();

    const svgPoints = pointsInPath(path, 15);
    const points = createPoints();

    function createPoints() {
      const points = [];

      const numPoints = svgPoints.length;

      for (let i = 0; i < numPoints; i++) {
        // x & y coordinates of the current point
        const x = svgPoints[i].x;
        const y = svgPoints[i].y;

        // store the point's position
        points.push({
          x: x,
          y: y,
          // we need to keep a reference to the point's original point for when we modulate the values later
          originX: x,
          originY: y,
          // more on this in a moment!
          noiseOffsetX: Math.random() * 1000,
          noiseOffsetY: Math.random() * 1000,
        });
      }
      return points;
    }

    (function animate() {
      path.setAttribute("d", spline(points, 1, true));

      // for every point...
      for (let i = 0; i < points.length; i++) {
        const point = points[i];

        // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
        const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
        const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
        // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
        const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
        const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

        // update the point's current coordinates
        point.x = x;
        point.y = y;

        // progress the point's x, y values through "time"
        point.noiseOffsetX += noiseStep;
        point.noiseOffsetY += noiseStep;
      }

      const hueNoise = noise(hueNoiseOffset, hueNoiseOffset);
      const hue = map(hueNoise, -1, 1, 0, 360);

      hueNoiseOffset += noiseStep / 6;

      requestAnimationFrame(animate);
    })();

    function map(n, start1, end1, start2, end2) {
      return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
    }

    function noise(x, y) {
      return simplex.noise2D(x, y);
    }

    document
      .querySelectorAll(`.${mouseover}`)
      [index].addEventListener("mouseover", () => {
        noiseStep = 0.01;
      });

    document
      .querySelectorAll(`.${mouseover}`)
      [index].addEventListener("mouseleave", () => {
        noiseStep = 0.003;
      });
  }
}

export default makeBubbleFluid;
