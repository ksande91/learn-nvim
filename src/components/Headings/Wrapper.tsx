import { type ReactElement, type ReactNode } from "react";

export interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps): ReactElement {
  return <pre className="text-cyan-500 text-vw-1">{children}</pre>;
}
