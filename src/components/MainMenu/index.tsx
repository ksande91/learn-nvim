"use client";
import { useEffect, useState, type ReactElement } from "react";
import { handleCaretNavigation } from "../../../utils/mainMenuHelpers";
import { CaretPosition } from "@/types/caretPosition";
import { DashboardMenuItems } from "@/types/dashBoardMenuItem";
import { useRouter } from "next/navigation";

import DashboardMenuItem from "../DashboardMenuItem";

export default function MainMenu(): ReactElement {
  const [caretPosition, setCaretPosition] = useState<CaretPosition>({
    x: 0,
    y: 0,
  });

  const router = useRouter();

  const menu: DashboardMenuItems = [
    { text: "Learn the basics", path: "/basics" },
    { text: "Key bindings", path: "/key-bindings" },
  ];

  function navigate(index: number) {
    const redirectPath = menu[index].path;
    router.push(redirectPath);
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      handleCaretNavigation(
        event,
        caretPosition,
        menu,
        setCaretPosition,
        navigate,
      );
    };

    window.addEventListener("keydown", handleKeyPress);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
    /* eslint-disable-next-line */
  }, [caretPosition]);

  return (
    <>
      {menu.map((item, index) => (
        <DashboardMenuItem
          key={index}
          number={index}
          text={item.text}
          caretPosition={caretPosition}
        />
      ))}
    </>
  );
}
