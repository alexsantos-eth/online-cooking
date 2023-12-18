import React, { useEffect, useRef, useState } from 'react';
import {
  Box3,
  ClampToEdgeWrapping,
  Group,
  MeshBasicMaterial,
  NearestFilter,
  Object3D,
  Object3DEventMap,
  TextureLoader,
} from 'three';

import { Clone, CloneProps, useFBX } from '@react-three/drei';

import { PIXEL } from '../../utils';
import { KitchenPropName } from './types';

interface KitchenModelProps extends Omit<CloneProps, "object"> {
  x?: number;
  y?: number;
  z?: number;
  name: KitchenPropName;
  face?: "left" | "right" | "front" | "back";
}

const KitchenProp: React.FC<KitchenModelProps> = ({
  name,
  x = 0,
  y = 0,
  z = 0,
  face = "front",
  ...meshProps
}) => {
  const [align, setAlign] = useState<number>(0);
  const [alignZ, setAlignZ] = useState<number>(0);

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
      mesh as { material: MeshBasicMaterial } & Object3D<Object3DEventMap>
    ).material = new MeshBasicMaterial({
      map: texture,
      transparent: true,
    });
  });

  useEffect(() => {
    if (meshRef?.current) {
      const boundingBox = new Box3().setFromObject(meshRef.current);
      const objectWidth = boundingBox.max.x - boundingBox.min.x;
      setAlign(fbx.position.x + objectWidth / 2);

      // NOW FOR Z
      const objectDepth = boundingBox.max.z - boundingBox.min.z;
      setAlignZ(fbx.position.z + objectDepth / 2);
    }
  }, [fbx.position.x, fbx.position.z]);

  return (
    <Clone
      key={`${name}-${align}-${alignZ}-${z}`}
      object={fbx}
      ref={meshRef}
      scale={[0.007, 0.007, 0.007]}
      rotation={[
        0,
        face === "left"
          ? Math.PI / 2
          : face === "right"
          ? -Math.PI / 2
          : face === "front"
          ? 0
          : Math.PI,
        0,
      ]}
      position={[align + x * PIXEL, y * PIXEL, alignZ + z * PIXEL]}
      {...meshProps}
    />
  );
};

export default KitchenProp;
