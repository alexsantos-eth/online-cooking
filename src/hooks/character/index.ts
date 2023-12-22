import { useEffect, useRef } from "react";

/**
 * The `useKeyboard` function is a custom hook in TypeScript that allows you to track which keys are
 * currently being pressed on the keyboard.
 * @returns The `useKeyboard` function returns the `keysDown` object, which is a `useRef` object
 * containing a record of keys that are currently being pressed down.
 */
export const useKeyboard = () => {
  const keysDown = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      keysDown.current[event.key] = true;
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      keysDown.current[event.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return keysDown;
};
