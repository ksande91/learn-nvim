"use client";
import { useState } from "react";

import Help from "@/components/Help";
import LearnNvim from "@/components/LearnNvim";
import MainMenu from "@/components/MainMenu";
import useKeyPress from "@/hooks/useKeyPress";

export default function Home() {
  const [helpOpen, setHelpOpen] = useState<boolean>(false);

  const handleKeyPress = () => {
    setHelpOpen(!helpOpen);
  };

  useKeyPress("?", ["ctrlKey", "shiftKey"], handleKeyPress);

  return (
    <main>
      <div className="w-full h-full flex-col flex justify-center items-center h-screen whitespace-pre font-mono">
        <Help open={helpOpen}>
          <div>Move the cursor using j or k</div>
          <div>j=down</div>
          <div>k=up</div>
          <div>Enter or number to choose</div>
        </Help>
        <LearnNvim />
        <div className="mt-8">
          <MainMenu />
        </div>
      </div>
    </main>
  );
}
