import { useEffect, useRef, useState } from "react";
import {
  Box3,
  ClampToEdgeWrapping,
  Group,
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
  const meshRef: React.RefObject<Group<Object3DEventMap>> = useRef(null);

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

  return { fbx, meshRef, texture };
};

interface UseFBXAlignmentProps {
  fbx: Group<Object3DEventMap>;
  meshRef: React.RefObject<Group<Object3DEventMap>>;
}
/**
 * The useFBXAlignment function calculates the alignment values for an FBX object based on its position
 * and the dimensions of its mesh.
 * @param {UseFBXAlignmentProps}  - - `fbx`: The FBX object that contains the 3D model.
 * @returns The function `useFBXAlignment` returns an object with two properties: `align` and `alignZ`.
 */
export const useFBXAlignment = ({ fbx, meshRef }: UseFBXAlignmentProps) => {
  const [align, setAlign] = useState<number>(0);
  const [alignZ, setAlignZ] = useState<number>(0);

  useEffect(() => {
    if (meshRef?.current) {
      const boundingBox = new Box3().setFromObject(meshRef.current);
      const objectWidth = boundingBox.max.x - boundingBox.min.x;
      setAlign(fbx.position.x + objectWidth / 2);

      // NOW FOR Z
      const objectDepth = boundingBox.max.z - boundingBox.min.z;
      setAlignZ(fbx.position.z + objectDepth / 2);
    }
  }, [fbx.position.x, fbx.position.z, meshRef]);

  return { align, alignZ };
};
