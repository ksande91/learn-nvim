import { type ReactElement, type ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps): ReactElement {
  return <div className="container mx-auto">{children}</div>;
}
