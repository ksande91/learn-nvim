import { type ReactElement, type ReactNode } from "react";

export interface InfoBoxProps {
  children: ReactNode;
}

export default function InfoBox({ children }: InfoBoxProps): ReactElement {
  return <div>{children}</div>;
}
