import { Styleable } from "@/types/stylable";
import { type ReactElement, type ReactNode } from "react";

export interface InfoBoxProps extends Styleable{
  title: string;
  children: ReactNode;
}

export default function InfoBox({
  children,
  title,
  className = ""
}: InfoBoxProps): ReactElement {
  return (
    <div className={`relative border-solid border-2 border-blue-300 p-8  bg-background ${className}`}>
      <div className="absolute -top-3 bg-background pl-2 pr-2">{title}</div>
      {children}
    </div>
  );
}
