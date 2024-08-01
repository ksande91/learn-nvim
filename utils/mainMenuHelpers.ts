import { CaretPosition } from "@/types/caretPosition";
import { DashboardMenuItems } from "@/types/dashBoardMenuItem";

const isKey = (key: string, event: any) => event.key === key;

export function handleMenuNavigation(
  event: KeyboardEvent,
  caretPosition: number,
  setCaretPosition: (index: number) => void,
  navigate: (index: number) => void,
) {
  if (event.key === "Enter") {
    navigate(caretPosition);
  }

  if (event.key === "j") {
    if (caretPosition === 1) return; 
    setCaretPosition(caretPosition + 1);
  }

  if (event.key === "k") {
    if (caretPosition ===  0) return;
    setCaretPosition(caretPosition - 1);
  }
}

export function handleCaretNavigation(
  event: KeyboardEvent,
  caretPosition: CaretPosition,
  menu: DashboardMenuItems,
  setCaretPosition: (caretPos: CaretPosition) => void,
  navigate: (index: number) => void,
) {
  if (isKey("Enter", event)) {
    navigate(caretPosition.y);
  }

  if (
    isKey("l", event) &&
    caretPosition.x + 1 < menu[caretPosition.y].text.length
  ) {
    setCaretPosition({ x: caretPosition.x + 1, y: caretPosition.y });
  }

  if (isKey("h", event) && caretPosition.x - 1 >= 0) {
    setCaretPosition({ x: caretPosition.x - 1, y: caretPosition.y });
  }

  if (isKey("j", event) && caretPosition.y < menu.length - 1) {
    let xPosition = 0;

    if (caretPosition.x >= menu[caretPosition.y + 1].text.length) {
      xPosition = menu[caretPosition.y + 1].text.length - 1;
    } else {
      xPosition = caretPosition.x;
    }

    setCaretPosition({ x: xPosition, y: caretPosition.y + 1 });
  }

  if (isKey("k", event) && caretPosition.y > 0) {
    setCaretPosition({ x: caretPosition.x, y: caretPosition.y - 1 });
  }
}
