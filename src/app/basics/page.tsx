import TheBasics from "@/components/Headings/TheBasics";
import InfoBox from "@/components/InfoBox";
import { type ReactElement } from "react";

export default function BasicsPage(): ReactElement {
  return (
    <div>
      <TheBasics />
      <InfoBox title="Info" className="mt-8">
        <div>
          This is meant to show you the absolute basics of navigating inside
          vim/neovim. I made some emulators to emulate the nvim editor and some
          behaviour may be slightly different, but it should help learn the
          basics.
        </div>
      </InfoBox>
    </div>
  );
}
