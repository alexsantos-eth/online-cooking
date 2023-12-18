import { useEffect, useState } from "react";

/**
 * The `useLightStart` function is a custom React hook that toggles the light intensity between 0 and
 * 20 at random intervals between 100 and 300 milliseconds, and stops after 800 milliseconds.
 * @returns The `useLightStart` function returns an array with two elements: `lightIntensity` and
 * `setLightIntensity`. The `lightIntensity` is the current intensity of the light, and
 * `setLightIntensity` is a function to update the intensity of the light. The `as const` assertion is
 * used to ensure that the returned array has a tuple type with the specific types of `lightIntensity
 */
export const useLightStart = () => {
  const [lightIntensity, setLightIntensity] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        setLightIntensity((prevIntensity) => (prevIntensity === 0 ? 20 : 0));
      },

      Math.floor(Math.random() * 300) + 150
    );

    setTimeout(() => {
      clearInterval(intervalId);
      setLightIntensity(20);
    }, 800);

    return () => clearInterval(intervalId);
  }, []);

  return [lightIntensity, setLightIntensity] as const;
};
