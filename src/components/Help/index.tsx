"use client";
import { type ReactElement, type ReactNode } from "react";
import Modal from "../Modal";

export interface HelpProps {
  children: ReactNode;
  open: boolean;
}

export default function Help({ children, open }: HelpProps): ReactElement {
  return (
    <>
      <div className="absolute top-0 right-0 border-2 border-red-500 p-2">
        <div>
          Help! <span className="text-xs">Ctrl + shift + ?</span>
        </div>
      </div>
      {open && (
        <Modal title="Help!">
          {children}
        </Modal>
      )}
    </>
  );
}
