import Container from "@/components/Container";
import TheBasics from "@/components/Headings/TheBasics";
import InfoBox from "@/components/InfoBox";
import NvimRenderer from "../../modules/editor/NvimRenderer";
import { type ReactElement } from "react";

export default function BasicsPage(): ReactElement {
  return (
    <Container>
      <TheBasics />
      <InfoBox title="Info" className="mt-8">
        <div>
          This is meant to show you the absolute basics of navigating inside
          vim/neovim. I have made some emulators to emulate the nvim editor and
          some behaviour may be slightly different, but it should help learn the
          basics.
        </div>
      </InfoBox>
      <NvimRenderer text={["test", "testTo"]} />
    </Container>
  );
}
