# Assets

Place shared static assets here, e.g.:

- `images/` — photos, rendered parts
- `models/` — GLB / GLTF models (importable in React Three Fiber scenes)
- `lottie/` — Lottie JSON animations

The site currently renders all visuals procedurally (Three.js scenes + SVG),
so it works fully offline. To swap a 3D scene for a GLB model:

```jsx
import { useGLTF } from '@react-three/drei'

function PartModel(props) {
  const { scene } = useGLTF('/models/part.glb')
  return <primitive object={scene} {...props} />
}
```
