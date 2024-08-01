import { useEffect } from "react";

type ModifierKey = "ctrlKey" | "shiftKey";

const useKeyPress = (
  targetKey: string,
  modifierKeys: ModifierKey[],
  action: () => void,
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => { 
      if (event.key === targetKey && modifierKeys.every(modifier => event[modifier])) {
        action();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [targetKey, modifierKeys, action]);
};

export default useKeyPress;
