import { type ReactElement, type ReactNode } from "react";
import Wrapper from "./Wrapper";

export default function TheBasics(): ReactElement {
  return (
    <Wrapper>{`
████████╗██╗  ██╗███████╗    ██████╗  █████╗ ███████╗██╗ ██████╗███████╗
╚══██╔══╝██║  ██║██╔════╝    ██╔══██╗██╔══██╗██╔════╝██║██╔════╝██╔════╝
   ██║   ███████║█████╗      ██████╔╝███████║███████╗██║██║     ███████╗
   ██║   ██╔══██║██╔══╝      ██╔══██╗██╔══██║╚════██║██║██║     ╚════██║
   ██║   ██║  ██║███████╗    ██████╔╝██║  ██║███████║██║╚██████╗███████║
   ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝╚══════╝
`}</Wrapper>
  );
}
