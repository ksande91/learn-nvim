"use client";
import { type ReactElement } from "react";

export interface DashboardMenuItemProps {
  number: number;
  text: string;
  caretPosition: { x: number; y: number };
}

export default function DashboardMenuItem({
  number,
  text,
  caretPosition,
}: DashboardMenuItemProps): ReactElement {
  function isMarked(index: number): boolean {
    if (caretPosition.y !== number) return false;
    if (caretPosition.x === index) return true;
    return false;
  }

  return (
    <div>
      <span className="text-cyan-300">[</span>
      <span className="text-amber-500">{number}</span>
      <span className="text-cyan-300">]</span>-{" "}
      {text.split("").map((c, index) => (
        <span
          key={index}
          style={{
            backgroundColor: isMarked(index) ? "white" : undefined,
            color: isMarked(index) ? "black" : undefined,
          }}
        >
          {c}
        </span>
      ))}
    </div>
  );
}
