import {
  ClampToEdgeWrapping,
  MeshPhongMaterial,
  NearestFilter,
  Object3D,
  Object3DEventMap,
  TextureLoader,
} from "three";

import { useFBX } from "@react-three/drei";

/**
 * The `useFBXModel` function returns an object containing an FBX model, a mesh reference, and a
 * texture.
 * @returns The function `useFBXModel` returns an object with three properties: `fbx`, `meshRef`, and
 * `texture`.
 */
export const useFBXModel = (name: string) => {
  const fbx = useFBX(`assets/kitchen/${name}/${name}.fbx`);

  const texture = new TextureLoader().load(
    `assets/kitchen/${name}/${name}.png`
  );
  texture.magFilter = NearestFilter;
  texture.minFilter = NearestFilter;
  texture.wrapS = ClampToEdgeWrapping;
  texture.wrapT = ClampToEdgeWrapping;

  fbx.children.forEach((mesh) => {
    (
      mesh as { material: MeshPhongMaterial } & Object3D<Object3DEventMap>
    ).material = new MeshPhongMaterial({
      map: texture,
      transparent: true,
    });
  });

  return { fbx, texture };
};
