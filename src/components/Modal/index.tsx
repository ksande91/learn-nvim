import { type ReactElement, type ReactNode } from "react";

export interface ModalProps {
  title: string;
  children: ReactNode;
}

export default function Modal({ children, title }: ModalProps): ReactElement {
  return (
    <div className="border-solid border-2 border-blue-300 p-8 min-h-64 w-8/12 bg-background z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute -top-2 bg-background pl-2 pr-2">{title}</div>
        {children}
    </div>
  );
}
