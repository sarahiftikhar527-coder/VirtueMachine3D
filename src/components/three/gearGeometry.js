import * as THREE from "three";

export function createGearGeometry({
  teeth = 14,
  outerR = 1.42,
  rootR = 1.16,
  boreR = 0.4,
  depth = 0.62,
  holes = 5,
  bevel = true,
} = {}) {
  const shape = new THREE.Shape();
  const step = (Math.PI * 2) / teeth;

  for (let i = 0; i < teeth; i += 1) {
    const angle = i * step;

    const points = [
      [rootR, angle],
      [rootR, angle + step * 0.34],
      [outerR, angle + step * 0.44],
      [outerR, angle + step * 0.66],
      [rootR, angle + step * 0.76],
    ];

    points.forEach(([radius, currentAngle], pointIndex) => {
      const x = Math.cos(currentAngle) * radius;
      const y = Math.sin(currentAngle) * radius;

      if (i === 0 && pointIndex === 0) {
        shape.moveTo(x, y);
      } else {
        shape.lineTo(x, y);
      }
    });
  }

  shape.closePath();

  const bore = new THREE.Path();

  bore.absarc(
    0,
    0,
    boreR,
    0,
    Math.PI * 2,
    true
  );

  shape.holes.push(bore);

  if (holes > 0) {
    const ringRadius = (rootR + boreR) / 2;

    const holeRadius = Math.min(
      0.19,
      (ringRadius - boreR) * 0.72
    );

    for (let i = 0; i < holes; i += 1) {
      const angle =
        (i / holes) * Math.PI * 2 +
        Math.PI / holes;

      const hole = new THREE.Path();

      hole.absarc(
        Math.cos(angle) * ringRadius,
        Math.sin(angle) * ringRadius,
        holeRadius,
        0,
        Math.PI * 2,
        true
      );

      shape.holes.push(hole);
    }
  }

  const geometry = new THREE.ExtrudeGeometry(
    shape,
    {
      depth,
      bevelEnabled: bevel,
      bevelThickness: 0.024,
      bevelSize: 0.024,
      bevelSegments: 1,
      curveSegments: 24,
    }
  );

  geometry.rotateX(-Math.PI / 2);
  geometry.computeVertexNormals();

  return geometry;
}