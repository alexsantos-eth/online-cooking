import React, { useEffect, useState } from 'react';

import { KITCHEN_RECT } from '../../../../components/KitchenProp/utils';
import { PIXEL } from '../../../../utils';

interface LightProps {}
const Light: React.FC<LightProps> = () => {
  const [lightIntensity, setLightIntensity] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => {
        setLightIntensity((prevIntensity) => (prevIntensity === 0 ? 20 : 0));
      },
      // BETWEEN 100 AND 300
      Math.floor(Math.random() * 300) + 150
    );

    setTimeout(() => {
      clearInterval(intervalId);
      setLightIntensity(20);
    }, 800);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <spotLight
      position={[
        (KITCHEN_RECT.Large_countertop.x + KITCHEN_RECT.Light_fixture.x * 2) *
          PIXEL,
        3.5,
        (KITCHEN_RECT.Small_countertop.z + KITCHEN_RECT.Light_fixture.z * 3) *
          PIXEL,
      ]}
      intensity={lightIntensity}
      color="#fff"
      penumbra={0.1}
      angle={Math.PI}
    />
  );
};

export default Light;
