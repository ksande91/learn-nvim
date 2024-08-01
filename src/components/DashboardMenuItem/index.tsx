"use client";
import { type ReactElement } from "react";

export interface DashboardMenuItemProps {
  number: number;
  text: string;
  caretPosition: number;
}

export default function DashboardMenuItem({
  number,
  text,
  caretPosition,
}: DashboardMenuItemProps): ReactElement {
  const isMarked = (): boolean => caretPosition === number;

  return (
    <div>
      <span className="text-cyan-300">[</span>
      <span
        className="text-amber-500"
        style={{
          backgroundColor: isMarked() ? "white" : undefined,
          color: isMarked() ? "black" : undefined,
        }}
      >
        {number}
      </span>
      <span className="text-cyan-300">]</span>-{" "}
      {text.split("").map((c, index) => (
        <span key={index}>{c}</span>
      ))}
    </div>
  );
}
